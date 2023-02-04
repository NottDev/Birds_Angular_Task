import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { IBirdModel } from "../../models/bird/bird.model";
import { BirdGateway } from "../../models/bird/gateway/bird.gateway";

@Injectable()
export class BirdUseCase {
    constructor(private birdGateway: BirdGateway) {}

    createBird(params: IBirdModel): Observable<IBirdModel | null>{
        return this.birdGateway.createBird(params).pipe(
            catchError(() => {
                return of(null);
            })
        );
    }

    getBird(): Observable<IBirdModel[] | null>{
        return this.birdGateway.getBird().pipe(
            catchError((e) =>{
                return of(e);
            })
        )
    }
}
