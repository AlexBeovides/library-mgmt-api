import { Column, DataType, Model, PrimaryKey, Table, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'books' })
export class Book extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER.UNSIGNED })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  ISBN: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  loaned: boolean;
}
