# Solana note
## Create a new Solana program (Token2022)
```
spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --transfer-hook 2PLEb1rym2rWBMArTCpgYYuJuQVF3ViJZwjSBprbJyQd

2PLEb1rym2rWBMArTCpgYYuJuQVF3ViJZwjSBprbJyQd: TRANSFER_HOOK_PROGRAM_ID
TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb:  TOKEN_2022_PROGRAM_ID

```

## Import wallet localhost to phantom
```
Copy private key from bosG8sKTkkHfsNomPHCYZJDZrbx7nHnY3xHRhskFNd4.json
Import to phantom wallet
![alt text](image.png)
``` 

## Create a new token
```
https://solana.com/developers/guides/getstarted/how-to-create-a-token
```

## Step create token 2022
```
spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --transfer-hook 2PLEb1rym2rWBMArTCpgYYuJuQVF3ViJZwjSBprbJyQd
=> Example: Mint address: 9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP
spl-token create-account 9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP
spl-token mint 9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP 10000000000000
spl-token accounts
```

## Some command on solana
```
solana balance
``````
solana balance
``` 
solana airdrop 2
``` 
```
solana config set --url https://api.devnet.solana.com
solana config get
solana config set --keypair ~/.config/solana/id.json (keypair file when creating by solana-keygen)
```
