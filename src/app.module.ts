import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// role
import { role } from './role/entity/role.entity';
import { RoleModule } from './role/role.module';
// company
import { company } from './company/entity/company.entity';
import { CompanyModule } from './company/company.module';
// product
import { product } from './product/entity/product.entity';
import { ProductModule } from './product/product.module';
// order
import { order } from './order/entity/order.entity';
import { OrderModule } from './order/order.module';
// orderline
import { orderline } from './orderline/entity/orderline.entity';
import { OrderlineModule } from './orderline/orderline.module';
// user
import { user } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
//author
import { AuthModule } from './auth/auth.module';


//mysql://b3f2b2ae73d0d4:e0682579@us-cdbr-east-06.cleardb.net/heroku_4a1026990a1e3f2?reconnect=true
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'us-cdbr-east-06.cleardb.net',
    port: 3306,
    username: 'b3f2b2ae73d0d4',
    password: 'e0682579',
    database: 'heroku_4a1026990a1e3f2',
    entities: [role, company, product, order,orderline,user],
    synchronize: true,
    logging:true,
  }), CompanyModule, RoleModule, ProductModule, OrderModule, OrderlineModule, UserModule, AuthModule,],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
