import { Component, OnInit } from '@angular/core';
import { ICountryModel } from 'src/app/domain/models/country/country.model';
import { CountryUseCase } from 'src/app/domain/usecase/country/country.usecase';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  id: number = 0;
  countryName: string = '';
  alphaCode: string = '';
  countriesAdded: ICountryModel[] | any = [];

  constructor(private countryUseCase: CountryUseCase) {
  }

  ngOnInit(): void {
    this.countryUseCase.getCountry().subscribe(result => {
      this.countriesAdded = result;
    })
  }

  submitCreateCountry() {
    this.validationPostCreateCountry();
  }

  private validationPostCreateCountry(): void{

    const country: ICountryModel = {
      id: this.id,
      countryName: this.countryName,
      alphaCode: this.alphaCode
    }

    this.countryUseCase.createCountry(country).subscribe(result => {
      console.log(result);
    })
  }
}
