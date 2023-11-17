import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private products;
    create(createProductDto: CreateProductDto): Product;
    findOne(id: string): Product | undefined;
    findAll(): Product[];
    deleteOne(id: string): string;
    updateOne(id: string, createProductDto: CreateProductDto): Product;
}
