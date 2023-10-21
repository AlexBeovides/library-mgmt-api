import { Column, DataType, Model, PrimaryKey, Table, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'readers' })
export class Reader extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER.UNSIGNED })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;
}
