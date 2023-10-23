// app.module.ts
import { Module ,OnModuleInit } from '@nestjs/common';
import { SequelizeModule , InjectModel } from '@nestjs/sequelize';
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
// export class AppModule {}

export class AppModule implements OnModuleInit {
  constructor(@InjectModel(Reader) private readonly readerModel: typeof Reader) {}

  async onModuleInit() {      // if there are not 2 readers, create them
    const count = await this.readerModel.count();

    if (count < 2) {
      // Create two default readers, adjust data as needed
      await this.readerModel.bulkCreate([
        { name: 'Default Reader 1' },
        { name: 'Default Reader 2' },
      ]);
    }
  }
}




