import { Observable } from "rxjs";
import { ICountryModel } from "../country.model";

export abstract class CountryGateway{
    abstract createCountry(params: ICountryModel): Observable<ICountryModel>;
}