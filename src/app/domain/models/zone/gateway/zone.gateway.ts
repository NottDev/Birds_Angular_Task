import { Observable } from "rxjs";
import { IZoneModel } from "../zone.model";

export abstract class ZoneGateway{
    abstract createZone(params: {zoneName: string}): Observable<IZoneModel>;
    abstract getZone(): Observable<IZoneModel[]>;
    abstract updateZone(params: {zoneName: string}):Observable<IZoneModel>;
    abstract deleteZone(params: {id: number}): Observable<boolean>;
}