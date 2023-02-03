import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
import { environment } from 'src/environments/environment';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';

@Injectable({
  providedIn: 'root'
})
export class BirdService extends BirdGateway {

  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});
  constructor(public http: HttpClient) {
    super();
  }

  createBird(params: IBirdModel): Observable<IBirdModel>{
    return this.http.post<IBirdModel>(
      environment.API_URL_BIRD,
      params,
      { headers: this.httpHeaders }
    );
  }
}
