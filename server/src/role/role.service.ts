import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { role } from './entity/role.entity';


@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(role)
        private roleRepository: Repository<role>,
    ){}

    // getR():Promise<role[]>{
    //     return this.roleRepository.find();
    // }
    // createR(RoleCreateDto:roleCreateDto){
    //     return this.roleRepository.save(RoleCreateDto);
    // }
    // updateR(RoleUpdatedDto:roleUpdatedDto,Id:number){
    //     return this.roleRepository.update(Id,RoleUpdatedDto);
    // }
    // showRById(Id:number){
    //     return this.roleRepository.findOne({where:{Id}});
    // }
    // deleteR(Id:number){
    //     return this.roleRepository.delete(Id);
    // }

}
