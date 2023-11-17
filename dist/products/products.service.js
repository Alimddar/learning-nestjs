"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    create(createProductDto) {
        const product = new product_entity_1.Product((0, uuid_1.v4)(), createProductDto.name, createProductDto.description, createProductDto.price);
        this.products.push(product);
        return product;
    }
    findOne(id) {
        return this.products.find((product) => product.id === id);
    }
    findAll() {
        return this.products;
    }
    deleteOne(id) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
        return 'Deleted successfully';
    }
    updateOne(id, createProductDto) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        const updatedProduct = {
            ...this.products[productIndex],
            ...createProductDto,
        };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map