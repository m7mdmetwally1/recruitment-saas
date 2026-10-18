import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from './config/index.js';

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
