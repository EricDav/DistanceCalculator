import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: Number.parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    entities: ['dist/locations/*.entity{.ts,.js}']
}