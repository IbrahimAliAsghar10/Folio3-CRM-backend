import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req ,UseGuards} from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { orderCreateDto } from './dto/order-create.dto'; 
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('order')
export class OrderController {
    constructor(private orderservice: OrderService){}


    @Roles(Role.Host)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Get('/h/:Id')
    getRecievablesorder(@Param('Id')Id:number){
        return this.orderservice.getOH(Id);
    }


    @Roles(Role.Client)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Get('/c/:Id')
    getTransactionsorder(@Param('Id')Id:number){
        const query = this.orderservice.getOC(Id);
        return query;
    }

    
    @Roles(Role.Host,Role.Client)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Get('/:Id')
    getorderById(@Param('Id')Id:number){
        return this.orderservice.getOById(Id);
    }
    

    @Roles(Role.Client)
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Patch('/:Id')
    updatepayment(@Body() OrderUpdatedPaymentDto:any,
    @Param('Id',ParseIntPipe) Id:number){
        return this.orderservice.updateOrderPayment(OrderUpdatedPaymentDto,Id);
    }
}
