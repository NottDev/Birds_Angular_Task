import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdUseCase } from './usecase/bird/bird.usecase';
import { CountryUseCase } from './usecase/country/country.usecase';
import { ZoneUseCase } from './usecase/zone/zone.usecase';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BirdUseCase,
    CountryUseCase,
    ZoneUseCase
  ]
})
export class DomainModule { }
