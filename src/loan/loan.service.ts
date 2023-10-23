import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Loan } from '../models/loan.model';
import { Book } from '../models/book.model';
import { Reader } from '../models/reader.model';
import { CreateLoanDto } from '../dto/create-loan.dto';
@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan) private readonly loanModel: typeof Loan,
    @InjectModel(Book) private readonly bookModel: typeof Book,
    @InjectModel(Reader) private readonly readerModel: typeof Reader,
  ) {}

  async createLoan(bookID: number, readerID: number, date?: Date): Promise<Loan> {
    const book = await this.bookModel.findByPk(bookID);
    const reader = await this.readerModel.findByPk(readerID);

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookID} not found`);
    }

    if (!reader) {
      throw new NotFoundException(`Reader with ID ${readerID} not found`);
    }

    const loanDate = date || new Date();
    
    const loan = new Loan();
    loan.bookId = bookID;
    loan.readerId = readerID;
    loan.date = loanDate;
    return await loan.save();
  }
}

