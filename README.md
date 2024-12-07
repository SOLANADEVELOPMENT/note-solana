# Solana note
## Create a new Solana program (Token2022)
```
spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --transfer-hook 2PLEb1rym2rWBMArTCpgYYuJuQVF3ViJZwjSBprbJyQd

2PLEb1rym2rWBMArTCpgYYuJuQVF3ViJZwjSBprbJyQd: TRANSFER_HOOK_PROGRAM_ID
TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb:  TOKEN_2022_PROGRAM_ID

```

## Deploy transfer hook program (use this code and IDE to deploy and get TRANSFER_HOOK_PROGRAM_ID program id)
```
https://github.com/SOLANADEVELOPMENT/anchor-transfer-hook
```

## Import wallet localhost to phantom
```
Copy private key from bosG8sKTkkHfsNomPHCYZJDZrbx7nHnY3xHRhskFNd4.json
Import to phantom wallet (Using feature import private key)
``` 

## Create a new token
```
https://solana.com/developers/guides/getstarted/how-to-create-a-token
```

## Step create token 2022
```
spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --transfer-hook 2PLEb1rym2rWBMArTCpgYYuJuQVF3ViJZwjSBprbJyQd
```

```
=> Example: Mint address: 9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP
```

```
spl-token create-account 9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP
```

```
spl-token mint 9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP 10000000000000
```

```
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


# FULL STEP FOR CREATE A NEW TOKEN

```
spl-token create-token

```

```

Creating token 9fGqUm9ZRkHDS7TQ3ombfkro9Ay1gcSmAkUnHPadVuS4 under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

Address:  9fGqUm9ZRkHDS7TQ3ombfkro9Ay1gcSmAkUnHPadVuS4
Decimals:  9

Signature: 3Vmm7zjtSKaxRZDwRRN9cvQpYKxjEkGPhY8f668VfXDkSVPdR9K3M8GLMnNDVUBaTCXFmCT7u5hcmNrLuq7rv6vu
```

```
spl-token create-account 9fGqUm9ZRkHDS7TQ3ombfkro9Ay1gcSmAkUnHPadVuS4
```

```
spl-token mint 9fGqUm9ZRkHDS7TQ3ombfkro9Ay1gcSmAkUnHPadVuS4 20000000
```

```
=> Working on phantom wallet (transfer or view token)
```
