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

    getBird(): Observable<IBirdModel[]> {
      return this.http.get<any>(
        environment.API_URL_BIRD,
        { headers: this.httpHeaders }
      )
    }

    updateBird(params: IBirdModel): Observable<IBirdModel> {
      throw new Error('Method not implemented.');
    }
    
    deleteBird(params: { id: number; }): Observable<boolean> {
      throw new Error('Method not implemented.');
    }
  }
  