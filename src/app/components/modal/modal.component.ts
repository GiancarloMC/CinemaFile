import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Tagify from '@yaireo/tagify'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  faTimes = faTimes;
  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faStar = faStar;
  faUser = faUser;
  faPlusCircle = faPlusCircle;
  faEnvelope = faEnvelope;
  faKey = faKey;
  faSearch = faSearch;
  faAngleUp = faAngleUp;
  faUndo = faUndo;
  faArrowRight = faArrowRight;

  isRegisterSectionActive : boolean = false;
  registerSubmitButtonText : string = "LOGIN";

  constructor() { }

  ngOnInit(): void {
    document.getElementById("auto-click-on-load").click();

    var tagify = new Tagify(document.querySelector("#tagify-test"));
  }

  enableRegisterSection(value) {
    this.isRegisterSectionActive = value;

    this.registerSubmitButtonText = value == true ? "REGISTER" : "LOGIN";
  }

}
