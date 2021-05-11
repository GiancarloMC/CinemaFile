import { Component, OnInit, ViewEncapsulation, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesSectionComponent implements OnInit, AfterViewInit {

  @ViewChildren("selectElement") selectElement: QueryList<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.adjustInputWidth();
  }

  adjustInputWidth() {
    this.selectElement.forEach((element: any) => {
      element.nativeElement.style.width = String((Number(element.nativeElement.value.length) + 1) * 8) + "px";
    });
  }

}
