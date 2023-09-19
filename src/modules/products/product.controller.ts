import {
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { AddProductDto } from './dtos/add-product.dto';
import { ChangeQuanityDto } from './dtos/change-quantity.dto';
import { RemoveProductDto } from './dtos/remove-product.dto';

@Controller('/api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(200)
  async findAll() {
    return await this.productService.findAll();
  }

  @Patch('/add')
  @HttpCode(200)
  async addProductToCart(@Body() addProductDto: AddProductDto) {
    return await this.productService.addProductToCart(addProductDto);
  }

  @Patch('/remove')
  @HttpCode(200)
  async removeProductFromCart(@Body() removeProductDto: RemoveProductDto) {
    return await this.productService.removeProductFromCart(removeProductDto);
  }

  @Patch('/update-count')
  @HttpCode(200)
  async changeQuanity(@Body() changeQuanityDto: ChangeQuanityDto) {
    return await this.productService.changeQuanity(changeQuanityDto);
  }
}
