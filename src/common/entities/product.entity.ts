import {
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
})
export class Product extends Model<Product> {
  @Column({
    field: 'id',
    type: DataType.BIGINT,
    defaultValue: 1,
    primaryKey: true,
  })
  id: string;

  @Column({ field: 'image', type: DataType.TEXT })
  image: string;

  @Column({ field: 'name', type: DataType.STRING })
  name: string;

  @Column({ field: 'description', type: DataType.TEXT })
  description: string;

  @Column({ field: 'price', type: DataType.DOUBLE })
  price: number;

  @Column({ field: 'color', type: DataType.STRING })
  color: string;

  @Column({ field: 'inCart', type: DataType.BOOLEAN })
  inCart: boolean;

  @Column({ field: 'count', type: DataType.INTEGER })
  count: number;

  @DeletedAt
  @Column({ field: 'deletedAt' })
  deletedAt: Date;

  @CreatedAt
  @Default(new Date())
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt: Date;
}
