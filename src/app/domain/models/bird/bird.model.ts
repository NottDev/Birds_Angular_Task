export interface IBirdModel{
    id?:number;
    commonName:string;
    scientificName:string;
    color:string;
    countriesId?:number[] | null;
}