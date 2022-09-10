require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan renew pitch mistake hockey civil army gentle'; 
let testAccounts = [
"0x915cdaba43317d7959c3b17a2da4930ffc332a469d32289a37ad4eabd1f7ffe8",
"0x26d1554ebd62590e195fca73f9711ce3d0eb436366a344377485681f7626b2d7",
"0x4125fdfc2e3ba2066b77f61e07cd8278d9b28cab02e7dac330ecee8e77bc2d6e",
"0x9c20cfd76aa4ce31a468b0459f846325e08050eb254916c1c843564b420dc87c",
"0xc0051c51c1dec489a3185b8477b5a3c091a17bb29f90076257b681be1223dd41",
"0x53e32a3892402d37b8e250a491b0d32badb7e955ea34a6f2bfaa6effe0ca8cde",
"0x6656f10eeda8541ef75bc0a062d536af1202ae6d2fb0f24f1bf302d63982e228",
"0xe41e5fe3ebc4a8ba92d4ecf47fb2fbf24758c2e9cf5c4d39a312d4e498b9119f",
"0x7d033e1930237a286664309cc2e204fba6d994f9df61a46e739a86eb9e6989f6",
"0xebe5993dc76dd2cad7817f454c63ff6ad78a5ffff8aff6494c6420f56e90f865"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

