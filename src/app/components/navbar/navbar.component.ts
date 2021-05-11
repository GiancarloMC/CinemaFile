import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("selectElement") selectElement;

  faSearch = faSearch;
  faUser = faUser;
  currentValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.adjustWidth();
  }

  adjustWidth(): void {
    this.selectElement.nativeElement.style.width = String((Number(this.selectElement.nativeElement.value.length) + 3) * 8) + "px";
  }

  manageAdvancedSearchOption(): void {
    if(this.selectElement.nativeElement.value != "Advanced Search  ")
      this.currentValue = this.selectElement.nativeElement.value;
    else
      this.selectElement.nativeElement.value = this.currentValue;
  }

}
