import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  technologies = [
    { name: 'Angular', color: '#E52A3A' },
    { name: 'RxJS', color: '#CE178E' },
    { name: 'TypeScript', color: '#294E80' },
    { name: 'Ionic', color: '#3281FF' },
    { name: 'Nativescript', color: '#3150D5'},
    { name: 'Firebase', color: '#F5820B' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
