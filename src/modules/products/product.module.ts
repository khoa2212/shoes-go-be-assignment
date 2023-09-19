import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { databaseProviders } from '~/shared/database/database.providers';
import { Product } from '~/common/entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [
    ...databaseProviders,
    ProductService,
    {
      provide: 'ProductRepository',
      useValue: Product,
    },
  ],
})
export class ProductModule {}
