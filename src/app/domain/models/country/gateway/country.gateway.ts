import { Observable } from "rxjs";
import { ICountryModel } from "../country.model";

export abstract class CountryGateway{
    abstract createCountry(params: ICountryModel): Observable<ICountryModel>;
    abstract getCountry(): Observable<ICountryModel[]>;
    abstract updateCountry(params: ICountryModel):Observable<ICountryModel>;
    abstract deleteCountry(params: {id: number}): Observable<boolean>;
}