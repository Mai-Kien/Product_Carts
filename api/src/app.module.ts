import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './common/config/configuration';
import { DataSource } from 'typeorm';

import {ProductModule} from "./module/product.module"


const mutilModule = [
  ProductModule
]


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        load: [configuration],
        isGlobal: true,
      }
    ),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('cfg.mysql'),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
      inject: [ConfigService],
    }),

    ...mutilModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
