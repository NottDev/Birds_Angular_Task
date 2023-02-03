import { Observable } from "rxjs";
import { IBirdModel } from "../bird.model";

export abstract class BirdGateway{
    abstract createBird(params: IBirdModel): Observable<IBirdModel>;
    abstract getBird(): Observable<IBirdModel[]>;
    abstract updateBird(params: IBirdModel):Observable<IBirdModel>;
    abstract deleteBird(params: {id: number}): Observable<boolean>;
}