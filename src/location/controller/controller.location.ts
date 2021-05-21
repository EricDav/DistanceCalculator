import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';
import { LocationService } from '../service/location/location.service';
import { Distance, DistanceData, DistanceBody } from '../types/types';


@Controller('api/locations')
export class LocationController {
    constructor(
        private locationService: LocationService
    ){}

    @Post('/')
    create(@Body() location: LocationDto): Promise<LocationDto> {
        return this.locationService.create(location);
    }

    @Get('/')
    find(): Promise<LocationDto[]> {
        return this.locationService.find();
    }

    @Get('/:id')
    findOne(@Param() params): Promise<LocationDto> {
        return this.locationService.findLocation(params.id) 
    }

    @Post('/distance')
    calculateDistance(@Body() distance: DistanceBody): Promise<Distance> {
        return this.locationService.findDistance(distance.location_name1, distance.location_name2);
    }

    @Put('/:id')
    update(@Body() location: DistanceData, @Param() params): Promise<LocationDto> {
        return this.locationService.update(params.id, location);
    }

    @Delete('/:id/:contact_person')
    delete(@Param() params): Promise<{message: string}> {
        return this.locationService.delete(params.id, params.contact_person);
    }

}
