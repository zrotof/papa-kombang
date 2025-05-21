export interface Accommodation {
    type: string,
    list: Hostel[]
}

export interface Hostel {
    name : string,
    image : string,
    descriptions : Description[],
    distances? : Distance[],
    price? : number,
    link : string
}

export interface Description {
    text : string,
}

export interface Distance {
    label : string,
    distance : any;
}

