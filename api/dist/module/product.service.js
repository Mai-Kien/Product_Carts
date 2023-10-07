"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const cart_entity_1 = require("../common/entites/cart.entity");
const product_entity_1 = require("../common/entites/product.entity");
let ProductService = exports.ProductService = class ProductService {
    constructor(cartsRepository, productsRepository) {
        this.cartsRepository = cartsRepository;
        this.productsRepository = productsRepository;
    }
    async getAllProduct() {
        const result = await this.productsRepository.find();
        return result;
    }
    async getAllCart() {
        const result = await this.cartsRepository.find();
        return result;
    }
    async createProduct(data) {
        const newData = await this.productsRepository.create(data);
        return await this.productsRepository.save(newData);
    }
    async createCart(data) {
        const product = await this.productsRepository.findOne({ where: {
                id: data.product_id
            } });
        const newQuantityProduct = Number(product.product_quantity) - Number(data.product_quantity);
        await this.productsRepository.update(data.product_id, {
            product_quantity: newQuantityProduct
        });
        const newData = {
            old_product_quantity: product.product_quantity,
            ...data
        };
        const createData = this.cartsRepository.create(newData);
        const result = this.cartsRepository.save(createData);
        return result;
    }
    async getDetailsProduct(id) {
        const product = this.productsRepository.findOne({ where: {
                id
            } });
        if (!product) {
            throw new common_1.NotFoundException(`Can't found video`);
        }
        return product;
    }
    async deleteCart(id, data) {
        await this.updateProductWhenDeleteCart(data.product_name, data.old_product_quantity);
        await this.cartsRepository.delete(id);
    }
    async updateProductWhenDeleteCart(product_name, old_product_quantity) {
        const product = await this.productsRepository.findOne({ where: {
                product_name
            } });
        await this.productsRepository.update(product.id, {
            product_quantity: old_product_quantity
        });
    }
    async updateCart(id, data) {
        console.log(data);
        const product = await this.productsRepository.findOne({ where: {
                product_name: data.product_name
            } });
        const newTotalProduct = Number(data.old_product_quantity) - Number(data.product_quantity);
        await this.productsRepository.update(product.id, {
            product_quantity: newTotalProduct
        });
        return this.cartsRepository.update(id, data);
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map