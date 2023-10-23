import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateBookDto {
  
  @IsOptional() // Optional because it's auto-incremented by the database.
  @IsNumber()
  id?: number;

  @IsString()
  name: string;

  @IsString()
  ISBN: string;

  @IsOptional() // Optional because it has a default value in the model.
  @IsBoolean()
  loaned?: boolean;
}
