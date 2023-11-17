import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import("./entities/product.entity").Product;
    findOne(id: string): import("./entities/product.entity").Product;
    findAll(): import("./entities/product.entity").Product[];
    deleteOne(id: string): string;
    updateOne(id: string, createProductDto: CreateProductDto): import("./entities/product.entity").Product;
}
