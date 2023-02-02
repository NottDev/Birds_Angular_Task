import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdComponent } from './bird/bird.component';
import { CountryComponent } from './country/country.component';
import { ZoneComponent } from './zone/zone.component';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
import { BirdUseCase } from 'src/app/domain/usecase/bird/bird.usecase';
import { BirdService } from 'src/app/infrastructure/driven-adapters/bird/bird.service';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { CountryUseCase } from 'src/app/domain/usecase/country/country.usecase';
import { CountryService } from 'src/app/infrastructure/driven-adapters/country/country.service';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { ZoneUseCase } from 'src/app/domain/usecase/zone/zone.usecase';
import { ZoneService } from 'src/app/infrastructure/driven-adapters/zone/zone.service';
import { HttpClientModule } from '@angular/common/http';

const birdUseCaseFactory =
(birdGateway: BirdGateway) => new BirdUseCase(birdGateway);

export const birdUseCaseProvider = {
  provide: BirdGateway,
  useFactory: birdUseCaseFactory,
  deps: [BirdGateway]
};

const countryUseCaseFactory =
(countryGateway: CountryGateway) => new CountryUseCase(countryGateway);

export const countryUseCaseProvider = {
  provide: CountryGateway,
  useFactory: countryUseCaseFactory,
  deps: [CountryGateway]
};

const zoneUseCaseFactory =
(zoneGateway: ZoneGateway) => new ZoneUseCase(zoneGateway);

export const zoneUseCaseProvider = {
  provide: ZoneGateway,
  useFactory: zoneUseCaseFactory,
  deps: [ZoneGateway]
};

@NgModule({
  declarations: [
    BirdComponent,
    CountryComponent,
    ZoneComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    BirdComponent,
    CountryComponent,
    ZoneComponent
  ],
  providers:[
    birdUseCaseProvider,
    { provide: BirdGateway, useClass: BirdService},
    countryUseCaseProvider,
    { provide: CountryGateway, useClass: CountryService},
    zoneUseCaseProvider,
    { provide: ZoneGateway, useClass: ZoneService}
  ]
})
export class ComponentsModule { }
