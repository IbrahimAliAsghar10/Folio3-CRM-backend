import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req ,UseGuards} from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('product')
export class ProductController {
    constructor(private productservice:ProductService){}


    @Roles(Role.Host)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Get('/:Id')
    getProductById(@Param('Id')Id:number){
        return this.productservice.showPById(Id);
    }
}
