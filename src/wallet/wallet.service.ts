import { Injectable } from '@nestjs/common';
import { Coins, LCDClient, MnemonicKey } from "@xpla/xpla.js";
import Web3 from 'web3';

@Injectable()
export class WalletService {
    
    createWallet() {
        const web3 = new Web3();
        return web3.eth.accounts.create();
    }
    async createXPLAWallet() {
        try{
            const gasPrices = await (
                await fetch("https://cube-fcd.xpla.dev/v1/txs/gas_prices", { redirect: 'follow' })
              ).json();
              const gasPricesCoins = new Coins(gasPrices);
              
              console.log(gasPricesCoins);
              const lcd = new LCDClient({
                URL: "https://cube-lcd.xpla.dev/",
                chainID: "cube_47-5",
              });
            const mnemonic = new MnemonicKey();
            const wallet = lcd.wallet(mnemonic);
            return wallet;

        }catch(e){
            console.log(e)
        }
        
    }
          
}
