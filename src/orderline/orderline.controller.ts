import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { OrderlineService } from './orderline.service';

@Controller('orderline')
export class OrderlineController {
    constructor(private orderlineservice: OrderlineService){}

    // @Get()
    // getorderline(){
    //     return this.orderlineservice.getOL();
    // }


    // @Get('/:Id')
    // getorderlineById(@Param('Id')Id:number){
    //     return this.orderlineservice.getOLById(Id);
    // }
    // @Delete('/:Id')
    // deleteorderline(@Param('Id',ParseIntPipe)Id:number){
    //     return this.orderlineservice.deleteOL(Id);
    // }

}
