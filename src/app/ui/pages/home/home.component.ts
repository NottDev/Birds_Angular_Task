import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zoneVisible: boolean = false;
  countryVisible: boolean = false;
  birdVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  refreshPage(){
    window.location.reload();
  } 
}
