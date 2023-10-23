// app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...require('../sequelize.config.js'),
      models: [Book],  // agregar el modelo de Book aquí
    }),
    SequelizeModule.forFeature([Book])  // Esto es necesario para inyectar modelos en servicios
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
