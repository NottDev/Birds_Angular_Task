import { Observable } from "rxjs";
import { IBirdModel } from "../bird.model";

export abstract class BirdGateway{
    abstract createBird(params: IBirdModel): Observable<IBirdModel>;
}