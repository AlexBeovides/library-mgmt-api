// app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.model';
import { Loan } from './models/loan.model';
import { Reader } from './models/reader.model';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { LoanService } from './loan/loan.service';
import { LoanController } from './loan/loan.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...require('../sequelize.config.js'),
      models: [Book,Loan,Reader],  // agregar el modelo de Book aquí
    }),
    SequelizeModule.forFeature([Book,Loan,Reader])  // Esto es necesario para inyectar modelos en servicios
  ],
  controllers: [BookController, LoanController],
  providers: [BookService, LoanService],
})
export class AppModule {}
