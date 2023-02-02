import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { IBirdModel } from "../../models/bird/bird.model";
import { BirdGateway } from "../../models/bird/gateway/bird.gateway";

@Injectable()
export class BirdUseCase {
    constructor(private createBirdGateway: BirdGateway) {}

    createBird(params: IBirdModel): Observable<IBirdModel | null>{
        return this.createBirdGateway.createBird(params).pipe(
            catchError(() => {
                return of(null);
            })
        );
    }
}
