import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';

@Injectable({
  providedIn: 'root'
})
export class BirdService extends BirdGateway {

  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http: HttpClient) {
    super();
  }

  createBird(params: any): Observable<any>{
    return this.http.post<any>("http://localhost:8087/bird", params, {
      headers: this.httpHeaders
    });
  }
}
