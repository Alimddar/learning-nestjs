import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const product = new Product(
      uuidv4(),
      createProductDto.name,
      createProductDto.description,
      createProductDto.price,
    );

    this.products.push(product);
    return product;
  }
  findOne(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  findAll() {
    return this.products;
  }

  deleteOne(id: string) {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    return 'Deleted successfully';
  }

  updateOne(id: string, createProductDto: CreateProductDto): Product {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    const updatedProduct = {
      ...this.products[productIndex],
      ...createProductDto,
    };
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }
}
