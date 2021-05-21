import { LocationDto } from '../dto/location.dto';

export class Utility {
    static isValidLocation(lat: string, long: string): boolean {
        return !isNaN(parseFloat(lat))  && !isNaN(parseFloat(lat));
    }

    static isValidNumber(num: string): boolean {
        return  !isNaN(parseInt(num));
    }

    static calcDistance(lat1, long1, lat2, long2) {
        const R = 6371; // km
        const dLat = this.toRad(lat2-lat1);
        const dLong = this.toRad(long2-long1);
        const newLat1 = this.toRad(lat1);
        const newLat2 = this.toRad(lat2);

        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLong/2) * Math.sin(dLong/2) * Math.cos(newLat1) * Math.cos(newLat2); 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c;
        return d;
    }

    // Converts numeric degrees to radians
    static toRad(Value) {
        return Value * Math.PI / 180;
    }
}