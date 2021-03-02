import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
