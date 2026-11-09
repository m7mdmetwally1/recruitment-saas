import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from './config/index';

@Module({
  imports: [
     ConfigModule.forRoot({
            load: configs,
            isGlobal: true,
            envFilePath: ['.env'],          
        })
  ],
  exports: [],
})
export class CommonModule {}
