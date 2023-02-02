import { Component, OnInit } from '@angular/core';
import { IZoneModel } from 'src/app/domain/models/zone/zone.model';
import { ZoneUseCase } from 'src/app/domain/usecase/zone/zone.usecase';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  zoneModel: any = {
    zoneName: ''
  }

  constructor(private zoneUseCase: ZoneUseCase) {
  }

  ngOnInit(): void {
  }

  // This is technically the use case 
  submitCreate() {
    this.validationPostCreateZone();
  }

  private validationPostCreateZone(): void{

    const zone: IZoneModel = {
      zoneName: this.zoneModel.zoneName
    }

    this.zoneUseCase.createZone(zone).subscribe(result => {
      console.log(result);
    })
  }
}
