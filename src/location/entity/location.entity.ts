import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class LocationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'lat', nullable: true})
    lat: string;

    @Column({name: 'long', nullable: false})
    long: string;

    @Column({name: 'description', nullable: false})
    description: string;

    @Column({name: 'phone', nullable: false})
    phone: string;

    @Column({name: 'website', nullable: true})
    website: string;

    @Column({name: 'contact_person', nullable: false})
    contact_person: string;
}
