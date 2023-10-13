import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from './wallet/wallet.module';
import { ViewsModule } from './views/views.module';

@Module({
  imports: [WalletModule, ViewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
