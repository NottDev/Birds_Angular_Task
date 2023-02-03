import { Component, OnInit } from '@angular/core';
import { ICountryModel } from 'src/app/domain/models/country/country.model';
import { CountryUseCase } from 'src/app/domain/usecase/country/country.usecase';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryName: string = '';
  alphaCode: string = '';

  constructor(private countryUseCase: CountryUseCase) {
  }

  ngOnInit(): void {
  }

  // This is technically the use case 
  submitCreateCountry() {
    this.validationPostCreateCountry();
  }

  private validationPostCreateCountry(): void{

    const country: ICountryModel = {
      countryName: this.countryName,
      alphaCode: this.alphaCode
    }

    this.countryUseCase.createCountry(country).subscribe(result => {
      console.log(result);
      this.countryName = '';
      this.alphaCode = '';
    })
  }
}
