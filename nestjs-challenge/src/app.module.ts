import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import Categories from './categories/categories.entity';
import * as path from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.resolve(__dirname, '../db.sqlite'),
      entities: [Categories],
    }),
    TypeOrmModule.forFeature([Categories]),
  ],
  controllers: [AppController, CategoriesController],
  providers: [AppService, CategoriesService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
