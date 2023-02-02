import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends CountryGateway{

  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http: HttpClient) {
    super();
  }

  createCountry(params: any): Observable<any>{
    return this.http.post<any>("http://localhost:8087/country", params, {
      headers: this.httpHeaders
    });
  }
}
