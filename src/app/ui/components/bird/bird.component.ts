import { Component, OnInit } from '@angular/core';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { BirdUseCase } from 'src/app/domain/usecase/bird/bird.usecase';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

  birdModel: IBirdModel = {
    commonName: '',
    scientificName: '',
    color: ''
  }

  birdsAdded: IBirdModel[] | any = [];

  constructor(private birdUseCase: BirdUseCase) {
  }

  ngOnInit(): void {
    this.birdUseCase.getBird().subscribe(result => {
      this.birdsAdded = result;
    })
  }

  submitCreateBird() {
    this.validationPostCreateBird();
  }

  private validationPostCreateBird(): void{

    const bird: IBirdModel = {
      commonName: this.birdModel.commonName,
      scientificName: this.birdModel.scientificName,
      color: this.birdModel.color
    }

    this.birdUseCase.createBird(bird).subscribe(result => {
      console.log(result);
    })
  }
}
