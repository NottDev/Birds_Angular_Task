import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { environment } from 'src/environments/environment';
import { IZoneModel } from 'src/app/domain/models/zone/zone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends ZoneGateway {
  

  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http: HttpClient) {
    super();
  }

  createZone(params: {zoneName: string}): Observable<IZoneModel>{
    return this.http.post<any>(
      environment.API_URL_ZONE,
      params,
      { headers: this.httpHeaders }
    );
  }

  getZone(): Observable<IZoneModel[]> {
    return this.http.get<any>(
      environment.API_URL_ZONE,
      { headers: this.httpHeaders }
    )
  }

  updateZone(params: { zoneName: string; }): Observable<IZoneModel> {
    throw new Error('Method not implemented.');
  }
  
  deleteZone(params: { id: number; }): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
