import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { Product } from '~/common/entities/product.entity';
import { AddProductDto } from './dtos/add-product.dto';
import { InternalServerError, BadRequestError } from '~/common/errors/error';
import { RemoveProductDto } from './dtos/remove-product.dto';
import { ChangeQuanityDto } from './dtos/change-quantity.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: typeof Product,

    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async findAll() {
    return await this.productRepository.findAll();
  }

  async getProductInCart() {
    return await this.productRepository.findAll({ where: { inCart: true } });
  }

  async addProductToCart(addProductDto: AddProductDto) {
    const product = await this.productRepository.findByPk(addProductDto.id);
    if (!product) {
      throw new BadRequestError('Invalid product id');
    }

    try {
      const [row] = await this.productRepository.update(
        {
          inCart: true,
          updatedAt: new Date(),
        },
        {
          where: { id: product.id },
        },
      );

      if (row > 0) return { success: true };
    } catch (err) {
      console.log(err?.message || err?.response.code || err);
      throw new InternalServerError(err?.message || err?.response.code || err);
    }
  }

  async removeProductFromCart(removeProductDto: RemoveProductDto) {
    const product = await this.productRepository.findByPk(removeProductDto.id);
    if (!product) {
      throw new BadRequestError('Invalid product id');
    }

    try {
      const [row] = await this.productRepository.update(
        {
          inCart: false,
          updatedAt: new Date(),
        },
        {
          where: { id: product.id },
        },
      );

      if (row > 0) return { success: true };
    } catch (err) {
      console.log(err?.message || err?.response.code || err);
      throw new InternalServerError(err?.message || err?.response.code || err);
    }
  }

  async changeQuanity(changeQuanityDto: ChangeQuanityDto) {
    const product = await this.productRepository.findByPk(changeQuanityDto.id);
    if (!product) {
      throw new BadRequestError('Invalid product id');
    }

    let c = product.count;
    if (changeQuanityDto.option) {
      // true thi cong len
      c = c + 1;
    } else {
      // false thi giam xuong
      c = c - 1;
    }

    try {
      if (c == 0) {
        const [row] = await this.productRepository.update(
          {
            inCart: false,
            updatedAt: new Date(),
          },
          {
            where: { id: product.id },
          },
        );
        if (row > 0) return { success: true };
      } else {
        const [row] = await this.productRepository.update(
          {
            count: c,
            updatedAt: new Date(),
          },
          {
            where: { id: product.id },
          },
        );
        if (row > 0) return { success: true };
      }
    } catch (err) {
      console.log(err?.message || err?.response.code || err);
      throw new InternalServerError(err?.message || err?.response.code || err);
    }
  }
}
