import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import {Cart} from "../common/entites/cart.entity"
import {Product} from "../common/entites/product.entity"

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Cart)
        private cartsRepository: Repository<Cart>,
        @InjectRepository(Product)
        private productsRepository: Repository<Product>
    ) { }

    async getAllProduct(){
        const result = await this.productsRepository.find()
        return result
    }

    async getAllCart(){
        const result = await this.cartsRepository.find()
        return result
    }

    async createProduct(data){
        const newData = await this.productsRepository.create(data)
        return await this.productsRepository.save(newData)
    }

    async createCart(data){

        const product = await this.productsRepository.findOne({ where: {
           id: data.product_id
        }})

        const newQuantityProduct = Number(product.product_quantity) - Number(data.product_quantity)

        await this.productsRepository.update(data.product_id, {
            product_quantity: newQuantityProduct
        })
        
        const newData = {
            old_product_quantity: product.product_quantity,
            ...data
        }

        const createData = this.cartsRepository.create(newData)
        const result = this.cartsRepository.save(createData)
        return result
    }

    async getDetailsProduct(id){
        const product = this.productsRepository.findOne({ where: {
            id
        }})
        if(!product){
            throw new NotFoundException(`Can't found video`)
        } 
        return product
    }

    async deleteCart(id, data){
        await this.updateProductWhenDeleteCart(data.product_name, data.old_product_quantity)
        await this.cartsRepository.delete(id)
    }

    async updateProductWhenDeleteCart(product_name, old_product_quantity){
        const product = await this.productsRepository.findOne({where : {
            product_name
        }})

        await this.productsRepository.update(product.id, {
            product_quantity: old_product_quantity
        })
    }

    async updateCart (id, data){
        console.log(data)
        const product = await this.productsRepository.findOne({where : {
            product_name: data.product_name
        }})

        const newTotalProduct = Number(data.old_product_quantity) - Number(data.product_quantity)

        await this.productsRepository.update(product.id, {
            product_quantity: newTotalProduct
        })

        return this.cartsRepository.update(id, data)
    }
}