import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
  @Get('')
  findAll() {
    return this.productsService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.productsService.deleteOne(id);
  }

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.updateOne(id, createProductDto);
  }
}
