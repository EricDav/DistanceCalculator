export interface Distance {
    distance: string,
    description: string,
    unit: string
};

export interface DistanceBody {
    location_name1: string,
    location_name2: string
};

export interface DistanceData {
    name?: string,
    lat?: string,
    long?: string
}
