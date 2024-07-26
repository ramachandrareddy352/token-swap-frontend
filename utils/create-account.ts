import * as web3 from "@solana/web3.js";
import { createAccount, createMint, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { TOKEN_SWAP_PROGRAM_ID } from "@solana/spl-token-swap";

async function main() {

    // create a devnet connection
    const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

    // create a random wallet keypair
    const wallet = web3.Keypair.generate();

    // create a randomly generated keypair for swap pool address.
    const tokenSwapStateAccount = web3.Keypair.generate();

    // create a swapAuthority account which is derived PDA accouunt from `tokenSwapStateAccount`
    const [swapAuthority, bumpSeed] = web3.PublicKey.findProgramAddressSync(
        [tokenSwapStateAccount.publicKey.toBuffer()],
        TOKEN_SWAP_PROGRAM_ID
    )

    // create Token-A & Token-B mint accounts and set owner as our wallet address or any
    const kryptMint = await createMint(connection, wallet, wallet.publicKey, null, 9);
    const ScroogeCoinMint = await createMint(connection, wallet, wallet.publicKey, null, 9);

    // create Token-A & Token-B ATA tokens for pool and set the owner as the `swapAuthority`
    const poolKryptAccount = await createAccount(connection, wallet, kryptMint, swapAuthority);
    const poolScroogeAccount = await createAccount(connection, wallet, ScroogeCoinMint, swapAuthority);

    // create a LP token and set the owner as `swapAuthority`
    const poolMint = await createMint(connection, wallet, swapAuthority, null, 9);

    // create a ATA account to mint initial deposit to that account
    const tokenAccountPool = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet,
        poolMint,
        wallet.publicKey
    );

    // create a fee account from poolMint token, for every swap this account receives fee in form of LP tokens.  owner of this account collect the fees colleted(LP tokens). In this case our wallet
    const feeAccount = await createAccount(connection, wallet, poolMint, wallet.publicKey);
}

main();