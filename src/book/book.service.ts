// book/book.service.ts
import { Injectable ,NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from '../models/book.model';
import { CreateBookDto } from '../dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async findAllBooks(): Promise<Book[]> {
    return this.bookModel.findAll();
}

  async addBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.name = createBookDto.name;
    book.ISBN = createBookDto.ISBN;

    return book.save();
  }

  async removeBook(id: string): Promise<void> {
    const book = await this.bookModel.findByPk(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    await book.destroy();
  }
  
}
