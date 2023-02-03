import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { environment } from 'src/environments/environment';
import { ICountryModel } from 'src/app/domain/models/country/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends CountryGateway{
  
  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http: HttpClient) {
    super();
  }

  createCountry(params: ICountryModel): Observable<ICountryModel>{
    return this.http.post<ICountryModel>(
      environment.API_URL_COUNT,
      params,
      { headers: this.httpHeaders }
    );
  }

  getCountry(): Observable<ICountryModel[]> {
    throw new Error('Method not implemented.');
  }
  updateCountry(params: ICountryModel): Observable<ICountryModel> {
    throw new Error('Method not implemented.');
  }
  deleteCountry(params: { id: number; }): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
