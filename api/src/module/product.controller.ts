import { Body, Controller, Delete, ForbiddenException, Get, Param, Patch, Post, Redirect, Render, Req, Res, UseGuards } from '@nestjs/common';

import {ProductService} from './product.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get('all')
    @Render('product')
    async getAllVideo() {
        return {message: await this.productService.getAllProduct()}
    } 

    @Get(':id')
    @Render('details')
    async getDetailsProduct(
        @Param() params: any
    ){  
        return {message : await this.productService.getDetailsProduct(params.id)}
    }

    @Get('cart/all')
    @Render('cart')
    async getAllCart (){
        return {message: await this.productService.getAllCart()}
    }

    //thêm mới vào giỏ hàng
    @Post('cart')
    @Redirect('cart/all')
    async addCart (@Body() data: any){
        await this.productService.createCart(data)
        return this.getAllCart()
    }

    @Post('cart/delete/:id')
    @Redirect('/product/cart/all')
    async deleteCart(
        @Param() params: any,
        @Body() data: any
    ){
        await this.productService.deleteCart(params.id, data)
    }

    @Post('cart/update/:id')
    @Redirect('/product/cart/all')
    async updateCart(
        @Param() params: any,
        @Body() data: any
    ){
        const result = await this.productService.updateCart(params.id, data)
        return result
    }

    @Get('form/create/product')
    @Render('addProduct')
    async formCreateProduct(){

    }

    @Post('create')
    @Redirect('/product/all')
    async createNewProduct(@Body() data: any){
        return await this.productService.createProduct(data)
    }

}
