import { Column, DataType, Model, PrimaryKey, ForeignKey, Table, AutoIncrement } from 'sequelize-typescript';
import { Book } from './book.model';
import { Reader } from './reader.model';

@Table({ tableName: 'loans' })
export class Loan extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER.UNSIGNED })
  id: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  bookId: number;

  @ForeignKey(() => Reader)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  readerId: number;

  @Column({ type: DataType.DATE,
    defaultValue: DataType.NOW })
  date: Date;
}
