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
    let tagify = new Tagify(document.querySelector("#tagify-test"), {
      whitelist: ["Any", "Action", "Horror", "Crime", "Comedy", "Romance"],
      enforceWhitelist: true,
      skipInvalid: true,
      editTags: false,
      backspace: false,
      autoComplete: {
        enabled: false
      },
      dropdown : {
        classname     : "color-blue",
        enabled       : 0,
        maxItems      : 100,
        position      : "text",
        closeOnSelect : false,
        highlightFirst: true
    },
      callbacks: {
        "add": () => this.tagsCount(1, tagify),
        "remove": () => this.tagsCount(0, tagify),
      }
    });
    
    document.getElementById("auto-click-on-load").click();
    /*let selectElement: Element = document.querySelector("#selectElement");
    console.log(selectElement);
    this.adjustInputWidth(selectElement);*/
  }

  enableRegisterSection(value: boolean): void {
    this.isRegisterSectionActive = value;

    this.registerSubmitButtonText = value == true ? "REGISTER" : "LOGIN";
  }

  tagsCount(value: number, input: Tagify): void {
    let tags: NodeListOf<Element> = document.querySelectorAll(".tagify__tag");

    if (tags.length + value == 0) {
      input.settings.whitelist = ["Any", "Action", "Horror", "Crime", "Comedy", "Romance"];
      return input.addTags(["Any"]);
    }

    input.settings.whitelist = ["Action", "Horror", "Crime", "Comedy", "Romance"];
    return input.removeTags(["Any", "any"]);
  }

  /*adjustInputWidth(Element): void {
    Element.nativeElement.style.width = String((Number(Element.nativeElement.value.length) + 1) * 8) + "px";
  }*/

}
