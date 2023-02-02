import { Observable } from "rxjs";
import { IZoneModel } from "../zone.model";

export abstract class ZoneGateway{
    abstract createZone(params: IZoneModel): Observable<IZoneModel>;
}