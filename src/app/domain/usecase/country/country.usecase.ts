import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ICountryModel } from "../../models/country/country.model";
import { CountryGateway } from "../../models/country/gateway/country.gateway";

@Injectable()
export class CountryUseCase {
    constructor(private createCountryGateway: CountryGateway) {}

    createCountry(params: ICountryModel): Observable<ICountryModel | null>{
        return this.createCountryGateway.createCountry(params).pipe(
            catchError(() => {
                return of(null);
            })
        );
    }
}
