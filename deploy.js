const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider  = new HDWalletProvider(
    'jazz arrow evil pitch please sock foot sister help road rude assist',
    'https://rinkeby.infura.io/OBofnMDbiA3KCRNqocaz'

);

const web3 = new Web3(provider);


const deploy = async () => {
        const accounts  = await web3.eth.getAccounts();
        console.log('Attemptind to deploy account', accounts[0]);

        const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there'] })
        .send({ gas: '1000000', from: accounts[0] });

        console.log('Contract deployed',result.options.address);
       
    };
deploy();
//