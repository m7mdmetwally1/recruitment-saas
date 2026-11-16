import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from './config/index';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
     ConfigModule.forRoot({
            load: configs,
            isGlobal: true,
            envFilePath: ['.env'],          
        }),
    DatabaseModule,
  ],
  exports: [DatabaseModule],
})
export class CommonModule {}
