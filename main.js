const { Blockchain, Transaction } = require(`${__dirname}/blockchain.js`)
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const mykey = ec.keyFromPrivate('c7b7b797bf62a83dfd38559ef66a9122c4af7d7d82c5973d724273958f90ae67');
const myWalletAddress = mykey.getPublic('hex');

let stanleyCoin = new Blockchain(4);

const txl = new Transaction(myWalletAddress, 'public key goes there', 100);
txl.signTransaction(mykey);
stanleyCoin.addTransaction(txl);



// stanleyCoin.createTransaction(new Transaction('address1', 'address2', 100));
// stanleyCoin.createTransaction(new Transaction('address2', 'address1', 50));

// stanleyCoin.minePendingTransactions('xaviers-address');

// console.log('\nBalance of xavier is ', stanleyCoin.getBalanceOfAddress('xaviers-address'));

stanleyCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is ', stanleyCoin.getBalanceOfAddress(myWalletAddress));