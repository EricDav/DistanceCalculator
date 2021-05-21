import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { config } from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
