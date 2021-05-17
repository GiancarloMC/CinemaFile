import { Component, OnInit, ViewEncapsulation, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
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
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChildren("selectElement") selectElements: QueryList<any>;

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
    const tagifyInputGenres: Element = document.querySelector("#tagify-input-genres");
    const tagifyInputExcludeGenres: Element = document.querySelector("#tagify-input-exclude-genres");
    const tagifyInputLanguages: Element = document.querySelector("#tagify-input-languages");
    const tagifyInputPgRatings: Element = document.querySelector("#tagify-input-pg-ratings");

    const genresTags: String[] = ["Action", "Horror", "Crime", "Comedy", "Romance"];
    const languagesTags: String[] = ["English", "Spanish", "French", "German", "Russian"]
    const pgRatings: String[] = ["G", "PG", "PG-13", "R", "NC-17"]

    this.createTagifyInput(tagifyInputGenres, "Any", genresTags);
    this.createTagifyInput(tagifyInputExcludeGenres, "None", genresTags);
    this.createTagifyInput(tagifyInputLanguages, "Any", languagesTags);
    this.createTagifyInput(tagifyInputPgRatings, "Any", pgRatings);

    document.getElementById("auto-click-on-load").click();
  }

  createTagifyInput(input: Element, defaultTag: string, tags: String[]): void {
    const defaultTagWhitelist = [defaultTag, ...tags];

    const tagifyInput = new Tagify(input, {
      whitelist: defaultTagWhitelist,
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
        "add": () => this.tagifyTagsCount(1, tagifyInput, defaultTag, [tags, defaultTagWhitelist]),
        "remove": () => this.tagifyTagsCount(0, tagifyInput, defaultTag, [tags, defaultTagWhitelist]),
      }
    });
  }

  tagifyTagsCount(initialValue: number, tagifyInput: Tagify, defaultTag: String, whitelist: Array<String[]>): void {
    const parentInput = document.querySelector("#" + tagifyInput.DOM.originalInput.id).previousElementSibling;
    const tags: NodeListOf<Element> = parentInput.querySelectorAll(".tagify__tag");

    if (tags.length + initialValue == 0) {
      tagifyInput.settings.whitelist = whitelist[1];
      return tagifyInput.addTags(defaultTag);
    }

    tagifyInput.settings.whitelist = whitelist[0];
    return tagifyInput.removeTags(defaultTag);
  }

  enableRegisterSection(value: boolean): void {
    this.isRegisterSectionActive = value;

    this.registerSubmitButtonText = value == true ? "REGISTER" : "LOGIN";
  }

  ngAfterViewInit() {
    this.adjustInputWidth();
  }

  adjustInputWidth() {
    this.selectElements.forEach((element: any) => {
      element.nativeElement.style.width = String((Number(element.nativeElement.value.length) + 1) * 8) + "px";
    });
  }

}
