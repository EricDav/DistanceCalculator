import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationDto } from '../../dto/location.dto';
import { Repository } from 'typeorm';
import { LocationEntity } from './../../entity/location.entity';
import { Utility } from '../../utility/utility';
import { Distance } from '../../types/types';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(LocationEntity)
        private locationRepository: Repository<LocationEntity>
    ){}
    
    public locations: LocationDto[] = []

    async create(location: LocationDto): Promise<LocationDto> {
        const loc: LocationDto  =  await this.locationRepository.findOne({name: location.name});
        if (loc) {
            throw new HttpException('Location name already exists', HttpStatus.BAD_REQUEST);
        }

        if (!Utility.isValidLocation(location.lat, location.long)) {
            throw new HttpException('Invalid latitude or longitude', HttpStatus.BAD_REQUEST);
        }

        return this.locationRepository.save(location);
    }


    find(): Promise<LocationDto[]> {
        return this.locationRepository.find();
    } 

    findUserByLocationName(name) {
        return this.locationRepository.findOne({name: name});
    }

    async findLocation(id): Promise<LocationDto> {
        if (!Utility.isValidNumber(id)) {
            throw new HttpException('Invalid location id', HttpStatus.BAD_REQUEST);
        }

        const loc = await this.locationRepository.findOne({id});
        if (!loc) {
            throw new HttpException('Location not found', HttpStatus.NOT_FOUND);
        }
        return loc;
    }

    async findDistance(locationName1, locationName2): Promise<Distance> {
        const location1 = await this.locationRepository.findOne({name: locationName1});
        if (!location1) {
            throw new HttpException('Location1 not found', HttpStatus.NOT_FOUND);
        }

        const location2 = await this.locationRepository.findOne({name: locationName2});
        if (!location2) {
            throw new HttpException('Location2 not found', HttpStatus.NOT_FOUND);
        }
 
        const distance = Utility.calcDistance(location1.lat, location1.long, location2.lat, location2.long).toFixed(2);
        const unit = 'Km';
        return {
            distance: distance,
            description: 'The distance between ' + locationName1 + ' and ' + locationName2 + ' is ' + distance + ' Km',
            unit: unit
        }
    }

    async update(id, location): Promise<LocationDto> {
        const name = location?.name;
        const long = location?.long;
        const lat = location?.lat;
        const description = location.description;
        const phone = location.phone;
        const contactPerson = location.contact_person;

        if (!name && !long && !lat) {
            throw new HttpException('Nothing to update', HttpStatus.BAD_REQUEST);
        }
        if (!Utility.isValidNumber(id)) {
            throw new HttpException('Invalid location id', HttpStatus.BAD_REQUEST);
        }
        const loc = await this.locationRepository.findOne({id});

        if (contactPerson !== loc.contact_person) {
            throw new HttpException('Not authorized to update this location', HttpStatus.UNAUTHORIZED);
        }

        if (!loc) {
            throw new HttpException('Location not found', HttpStatus.NOT_FOUND);
        }
        if (name && loc.name !== name && await this.locationRepository.findOne({name})) {
            throw new HttpException('Location name already exists', HttpStatus.BAD_REQUEST);
        }

        loc.name = name ? name : loc.name;
        loc.lat = lat ? lat : loc.lat;
        loc.long = long ? long : loc.long;
        loc.description = description ? description : loc.description;
        loc.phone = phone ? phone : loc.phone;
        const result = await this.locationRepository.update({id}, loc);
        if (!result) throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);

        return loc;
    }

    async delete(id, contactPerson):Promise<{message: string}> {
        const loc = await this.locationRepository.findOne({id});
        if (!loc) {
            throw new HttpException('Location not found', HttpStatus.NOT_FOUND);
        }

        if (contactPerson !== loc.contact_person) {
            throw new HttpException('Not authorized to delet this location', HttpStatus.UNAUTHORIZED);
        }

        const result = await this.locationRepository.delete({id});
        if (!result) throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);

        return {
            message: 'Location deleted successfully'
        };
    }
}
