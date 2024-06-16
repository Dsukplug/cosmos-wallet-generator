const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const fs = require("fs");

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

const saveWalletsToFile = (wallets, filename) => {
  const data = JSON.stringify(wallets, null, 2);
  fs.writeFileSync(filename, data);
};

const numOfWallets = 100; // Укажите количество кошельков, которое хотите создать
const outputFilename = "wallets.json"; // Имя файла для сохранения данных

generateWallets(numOfWallets).then((wallets) => {
  saveWalletsToFile(wallets, outputFilename);
  console.log(`Создано ${numOfWallets} кошельков и сохранено в ${outputFilename}`);
});
