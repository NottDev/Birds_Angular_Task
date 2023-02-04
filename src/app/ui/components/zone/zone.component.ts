import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IZoneModel } from 'src/app/domain/models/zone/zone.model';
import { ZoneUseCase } from 'src/app/domain/usecase/zone/zone.usecase';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  zoneForm: FormGroup;
  zonesAdded: IZoneModel[] | any = [];

  constructor(
    private formBuilder: FormBuilder,
    private zoneUseCase: ZoneUseCase
    ) {
    this.zoneForm = this.formBuilder.group(
      {
        zoneName: ["", Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.zoneUseCase.getZone().subscribe(result => {
      this.zonesAdded = result;
    })
  }

  submitCreateZone() {
    this.validationPostCreateZone();
  }

  private validationPostCreateZone(): void{

    this.zoneUseCase.createZone({zoneName: this.zoneForm.value.zoneName}).subscribe(result => {
      console.log(result);
    })
  }
}
