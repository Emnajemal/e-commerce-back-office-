import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/carousel/carousel.snippetcode';

// CarouselImages interface
export interface CarouselImages {
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  five?: string;
  six?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  // public
  public contentHeader: object;
  public carouselImages: CarouselImages = {
    one: 'assets/images/slider/01.jpg',
    two: 'assets/images/slider/02.jpg',
    three: 'assets/images/slider/03.jpg',
    four: 'assets/images/slider/04.jpg',
    five: 'assets/images/slider/05.jpg',
    six: 'assets/images/slider/06.jpg'
  };

  // snippet code variables
  public _snippetCodeBasicExample = snippet.snippetCodeBasicExample;
  public _snippetCodeOptionalCaptions = snippet.snippetCodeOptionalCaptions;
  public _snippetCodeIntervalOption = snippet.snippetCodeIntervalOption;
  public _snippetCodePauseOption = snippet.snippetCodePauseOption;
  public _snippetCodeWrapOption = snippet.snippetCodeWrapOption;
  public _snippetCodeKeyboardOption = snippet.snippetCodeKeyboardOption;
  public _snippetCodeNavigationArrow = snippet.snippetCodeNavigationArrow;
  public _snippetCodeNavigationIndicators = snippet.snippetCodeNavigationIndicators;
  public _snippetCodeCrossfade = snippet.snippetCodeCrossfade;
  public _snippetCodeActiveId = snippet.snippetCodeActiveId;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Carousel',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Components',
            isLink: true,
            link: '/'
          },
          {
            name: 'Carousel',
            isLink: false
          }
        ]
      }
    };
  }
}
