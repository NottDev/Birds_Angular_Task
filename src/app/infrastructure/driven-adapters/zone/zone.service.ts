import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends ZoneGateway {

  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http: HttpClient) {
    super();
  }

  createZone(params: any): Observable<any>{
    return this.http.post<any>("http://localhost:8087/zone", params, {
      headers: this.httpHeaders
    });
  }
}
