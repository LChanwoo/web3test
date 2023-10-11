import { Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class WalletService {
    
    createWallet() {
        const web3 = new Web3();
        return web3.eth.accounts.create();
    }
}
