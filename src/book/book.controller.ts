// book/book.controller.ts
import { Body, Controller,Get, Post ,Delete, Param  } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { Book } from 'src/models/book.model';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
async findAllBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
}

  @Post()
  async addBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.addBook(createBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a book' })
  @ApiParam({ name: 'id', description: 'ID of the book to remove' })
  async removeBook(@Param('id') id: string) {
    return this.bookService.removeBook(id);
  }
}
