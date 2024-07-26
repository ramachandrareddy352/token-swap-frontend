import * as Web3 from "@solana/web3.js"

// address at which the swap pool is deployed
export const tokenSwapStateAccount = new Web3.PublicKey("EV7FEEq2EyTFtKx4ukp2QfW9mWLGcJckGGBNp5cjcHUe")

// mint authority of LP tokens in the pool. It is a PDA account using seed as `tokenSwapStateAccount` and owner of token-A ATA & token-B ATA pool's accounts to store the token-A and token-B tokens.
export const swapAuthority = new Web3.PublicKey("24zqZMTYLVk4gm62seqU7KhBwvi3uBGtyDbnsC4rkbuR")

// token-A ATA account , owner is swapAuthority
export const poolKryptAccount = new Web3.PublicKey("BVPUZrv5nk3jMyTWkZdxvp2LuyPF1DmGTyR8AzKvgZgN")

// token-B ATA account => owner is swapAuthority
export const poolScroogeAccount = new Web3.PublicKey("5ttkBtMndCbHdSib22K4wRUE5ifprPXkMSckzBRSQv3K")

// LP token of the pool(mint authority => swapAuthority)
export const poolMint = new Web3.PublicKey("CXQYDT9ShDYG1JMMwjNiR6TcL4u4uJNnguAbLKw6jVv4")

// ATA account of `poolMint`, where initial pool tokens are minted to this account when pool is created
export const tokenAccountPool = new Web3.PublicKey("Fp1W1KHuakombQATnToDCSpTnqLicFEfxWgtCAWbuvCM")

// which is a ATA of poolMint account(owned by HfoTxFR1Tm6kGmWgYWD6J7YHVy1UwqSULUGVLXkJqaKN) which takes the fees while swapping tokens
export const feeAccount = new Web3.PublicKey("EY4hgx73saq9xuLr85HNaxGMAK6R5TkvuSDchKbpt291")

// token-A => Krypt token
export const kryptMint = new Web3.PublicKey("DWiD4EVUtnsgqoGbdSK5kBjHRJ7XoGx58WPHBu7t73Dh")

// token-B => Scrooge token
export const ScroogeCoinMint = new Web3.PublicKey("4AG5yRYmMcpMxcRvvkLPHHiSdnCnRQhtncs79CoQNnRQ")

export const airdropProgramId = new Web3.PublicKey("CPEV4ibq2VUv7UnNpkzUGL82VRzotbv2dy8vGwRfh3H3")
export const airdropPDA = new Web3.PublicKey("99ynLfSvcRXwYMKv4kmbcAyGxhfD7KfgrsuHTx9Dvoot")
export const TOKEN_SWAP_PROGRAM_ID = new Web3.PublicKey("SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8")
export const ASSOCIATED_TOKEN_PROGRAM_ID = new Web3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")