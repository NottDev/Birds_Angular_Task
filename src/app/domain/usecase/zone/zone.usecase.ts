import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ZoneGateway } from "../../models/zone/gateway/zone.gateway";
import { IZoneModel } from "../../models/zone/zone.model";

@Injectable()
export class ZoneUseCase {
    constructor(private zoneGateway: ZoneGateway) {}

    createZone(params: {zoneName: string}): Observable<IZoneModel>{
        return this.zoneGateway.createZone(params).pipe(
            catchError((e) => {
                return of(e);
            })
        );
    }

    getZone(): Observable<IZoneModel[] | null>{
        return this.zoneGateway.getZone().pipe(
            catchError((e) =>{
                return of(e);
            })
        )
    }
}
