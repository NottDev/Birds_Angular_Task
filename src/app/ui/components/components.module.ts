import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdComponent } from './bird/bird.component';
import { CountryComponent } from './country/country.component';
import { ZoneComponent } from './zone/zone.component';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
import { BirdService } from 'src/app/infrastructure/driven-adapters/bird/bird.service';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { CountryService } from 'src/app/infrastructure/driven-adapters/country/country.service';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { ZoneService } from 'src/app/infrastructure/driven-adapters/zone/zone.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from 'src/app/domain/domain.module';

@NgModule({
  declarations: [
    BirdComponent,
    CountryComponent,
    ZoneComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DomainModule
  ],
  exports:[
    BirdComponent,
    CountryComponent,
    ZoneComponent
  ],
  providers:[
    { provide: BirdGateway, useClass: BirdService},
    { provide: CountryGateway, useClass: CountryService},
    { provide: ZoneGateway, useClass: ZoneService}
  ]
})
export class ComponentsModule { }
