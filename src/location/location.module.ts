import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './controller/controller.location';
import { LocationService } from './service/location/location.service';
import { LocationEntity } from './entity/location.entity'

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
