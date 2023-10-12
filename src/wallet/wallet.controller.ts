import { Controller, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {

    constructor(
        private readonly walletService: WalletService,
    ) {}

    @Post('create')
    createWallet() {
        return this.walletService.createWallet();
    }
    @Post('createXPLA')
    createXPLAWallet() {
        return this.walletService.createXPLAWallet();
    }

}
