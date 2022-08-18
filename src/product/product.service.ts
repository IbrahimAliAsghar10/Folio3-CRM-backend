import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product } from './entity/product.entity';
import { Request } from 'express';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(product)
        private productRepository: Repository<product>,
    ){}



    showPById(companyId:number){
        return this.productRepository.find({where:{
                Company:{
                    Id:companyId
                }
        }
    });
    }




}
