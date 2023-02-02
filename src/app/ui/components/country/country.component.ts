import { Component, OnInit } from '@angular/core';
import { ICountryModel } from 'src/app/domain/models/country/country.model';
import { CountryUseCase } from 'src/app/domain/usecase/country/country.usecase';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryModel: any = {
    countryName: '',
    alphaCode: ''
  }

  constructor(private countryUseCase: CountryUseCase) {
  }

  ngOnInit(): void {
  }

  // This is technically the use case 
  submitCreate() {
    this.validationPostCreateCountry();
  }

  private validationPostCreateCountry(): void{

    const country: ICountryModel = {
      countryName: this.countryModel.countryName,
      alphaCode: this.countryModel.alphaCode
    }

    this.countryUseCase.createCountry(country).subscribe(result => {
      console.log(result);
    })
  }
}
