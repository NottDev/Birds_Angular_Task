import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from 'rxjs/operators';
import { ZoneGateway } from "../../models/zone/gateway/zone.gateway";
import { IZoneModel } from "../../models/zone/zone.model";

@Injectable()
export class ZoneUseCase {
    constructor(private createZoneGateway: ZoneGateway) {}

    createZone(params: IZoneModel): Observable<IZoneModel | null>{
        return this.createZoneGateway.createZone(params).pipe(
            catchError(() => {
                return of(null);
            })
        );
    }
}
