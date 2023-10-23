import { IsInt, IsDate, IsOptional } from 'class-validator';

export class CreateLoanDto {
  @IsInt()
  bookId: number;

  @IsInt()
  readerId: number;

  @IsDate()
  @IsOptional()
  date?: Date;
}
