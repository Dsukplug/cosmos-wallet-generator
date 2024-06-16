# Cosmos Wallet Generator

Этот проект предназначен для массового создания кошельков Cosmos.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/yourusername/cosmos-wallet-generator.git
   cd cosmos-wallet-generator

2. Установите зависимости
   ```bash
   npm install
   
## Конфигурация
Вы можете изменить количество создаваемых кошельков, изменив значение переменной numOfWallets в файле 'generateWallets.js'

const numOfWallets = 100;
    
## Использование 
Для создания кошельков запустите скрипт 'generateWallets.js' и будет создана папка с кошельками ~wallets.json~  wallets.csv
  ```bash
node generateWallets.js
