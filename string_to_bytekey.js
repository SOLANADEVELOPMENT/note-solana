const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');

const privateKeyBase58 = "STRING_PRIVATE_KEY_HERE";

// Convert the private key to a Uint8Array
const privateKey = bs58.decode(privateKeyBase58);

// Create a Keypair from the private key
const keypair = Keypair.fromSecretKey(privateKey);

// Note: Solana does not have a direct method to convert a private key to a seed phrase.
// You would typically generate a new seed phrase and derive the keypair from it.

console.log("Public Key:", keypair.publicKey.toBase58());
console.log("Private Key:", keypair.secretKey);