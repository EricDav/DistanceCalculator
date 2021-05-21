import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class LocationDto {
    id: number;

    website: string

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lat: string;

    @IsNotEmpty()
    long: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    contact_person: string;

    @IsNotEmpty()
    phone: string;
}
