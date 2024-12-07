const bip39 = require('bip39');
const { Buffer } = require('buffer');

const seedPhrase = "vdhicle glass category raise dddd will sorry else dddd dddd empty dddd"; // Replace with your actual seed phrase

function convertSeedPhraseToByteArray(seedPhrase) {
    const seed = bip39.mnemonicToSeedSync(seedPhrase);
    const byteArray = Array.from(seed);
    return byteArray;
}

const byteArray = convertSeedPhraseToByteArray(seedPhrase);
console.log(byteArray);