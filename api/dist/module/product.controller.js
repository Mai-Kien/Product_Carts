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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getAllVideo() {
        return { message: await this.productService.getAllProduct() };
    }
    async getDetailsProduct(params) {
        return { message: await this.productService.getDetailsProduct(params.id) };
    }
    async getAllCart() {
        return { message: await this.productService.getAllCart() };
    }
    async addCart(data) {
        await this.productService.createCart(data);
        return this.getAllCart();
    }
    async deleteCart(params, data) {
        await this.productService.deleteCart(params.id, data);
    }
    async updateCart(params, data) {
        const result = await this.productService.updateCart(params.id, data);
        return result;
    }
    async formCreateProduct() {
    }
    async createNewProduct(data) {
        return await this.productService.createProduct(data);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.Render)('product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllVideo", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.Render)('details'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getDetailsProduct", null);
__decorate([
    (0, common_1.Get)('cart/all'),
    (0, common_1.Render)('cart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllCart", null);
__decorate([
    (0, common_1.Post)('cart'),
    (0, common_1.Redirect)('cart/all'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addCart", null);
__decorate([
    (0, common_1.Post)('cart/delete/:id'),
    (0, common_1.Redirect)('/product/cart/all'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteCart", null);
__decorate([
    (0, common_1.Post)('cart/update/:id'),
    (0, common_1.Redirect)('/product/cart/all'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateCart", null);
__decorate([
    (0, common_1.Get)('form/create/product'),
    (0, common_1.Render)('addProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "formCreateProduct", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.Redirect)('/product/all'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createNewProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map