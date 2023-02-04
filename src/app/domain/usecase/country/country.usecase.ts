import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ICountryModel } from "../../models/country/country.model";
import { CountryGateway } from "../../models/country/gateway/country.gateway";

@Injectable()
export class CountryUseCase {
    constructor(private countryGateway: CountryGateway) {}

    createCountry(params: ICountryModel): Observable<ICountryModel | null>{
        return this.countryGateway.createCountry(params).pipe(
            catchError(() => {
                return of(null);
            })
        );
    }

    getCountry(): Observable<ICountryModel[] | null>{
        return this.countryGateway.getCountry().pipe(
            catchError((e) =>{
                return of(e);
            })
        )
    }
}
