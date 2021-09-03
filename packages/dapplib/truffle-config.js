require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy raise pizza essay inflict civil army genre'; 
let testAccounts = [
"0xcac08d30a802da0d7981b1af29fec31a6805817aa207cb72f21b14f3b43f4e0f",
"0x139ec949d196b8db51610eaa1116a181e5ccbccaaf778f4aacede762e9779a0c",
"0x7dcf6d543ab18ac1e0f157ee1952636fc54d67242511625ef5b13fc2b1855b87",
"0x86ec9739e2655a8a54558e48256207e1945a4e9e2a3d404f1be151d580295cfb",
"0x4f5fd79f80bd9dd0aafa6b9f04ea04d017cf2713d38b7211340ad88c4abf8e02",
"0xa40e78fdf1dc1502bdbed37ab7203dbc534f80d3ad3fbb4706a7651e5a300aca",
"0x66f84abbc0df7036514170208388871a462e0c153008c297ede1589cc960fd6b",
"0x696636f7bdafdb777fac26335419fc3913632807fe2c7bf0c37441b3289c3a47",
"0x67335581a10b841b77e8acfa2a4c40b44a1df146c985a9df0389f52e5873c553",
"0x842d9c50724047be7e478408251d98431f04530c4ab8126b77c9ee86f0649354"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


