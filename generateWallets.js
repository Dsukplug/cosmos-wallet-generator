const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const fs = require("fs");
const { createObjectCsvWriter } = require('csv-writer');

const generateWallets = async (numOfWallets) => {
  const wallets = [];
  for (let i = 0; i < numOfWallets; i++) {
    const wallet = await DirectSecp256k1HdWallet.generate(12);
    const [account] = await wallet.getAccounts();
    wallets.push({
      address: account.address,
      mnemonic: wallet.mnemonic,
    });
  }
  return wallets;
};

const saveWalletsToCSV = (wallets, filename) => {
  const csvWriter = createObjectCsvWriter({
    path: filename,
    header: [
      { id: 'address', title: 'Address' },
      { id: 'mnemonic', title: 'Mnemonic' }
    ]
  });

  return csvWriter.writeRecords(wallets);
};

const numOfWallets = 100; // Укажите количество кошельков, которое хотите создать
const outputFilename = "wallets.csv"; // Имя файла для сохранения данных в формате CSV

generateWallets(numOfWallets)
  .then((wallets) => {
    return saveWalletsToCSV(wallets, outputFilename);
  })
  .then(() => {
    console.log(`Создано ${numOfWallets} кошельков и сохранено в ${outputFilename}`);
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });

