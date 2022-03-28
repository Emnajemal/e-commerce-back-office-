import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';

import { Person, DataService } from 'app/main/forms/form-elements/select/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {
  // public
  public contentHeader: object;

  // select basic
  public selectBasic: Person[] = [];
  public selectBasicLoading = false;

  // select group
  public selectGroupselected = 'Adam';
  public selectGroup = [
    {
      name: 'Adam',
      country: 'United States'
    },
    {
      name: 'Homer',
      country: ''
    },
    {
      name: 'Samantha',
      country: 'United States'
    },
    {
      name: 'Amalie',
      country: 'Argentina'
    },
    {
      name: 'Estefanía',
      country: 'Argentina'
    },
    {
      name: 'Adrian',
      country: 'Ecuador'
    },
    {
      name: 'Wladimir',
      country: 'Ecuador'
    },
    {
      name: 'Natasha',
      country: 'Ecuador'
    },
    {
      name: 'Nicole',
      country: 'Colombia'
    },
    {
      name: 'Michael',
      country: 'Colombia'
    },
    {
      name: 'Nicolás',
      country: 'Colombia'
    }
  ];

  // select icon
  public selectIcon = [
    {
      id: 1,
      name: 'Chrome',
      icon: 'fa fa-chrome'
    },
    {
      id: 2,
      name: 'Firefox',
      icon: 'fa fa-firefox'
    },
    {
      id: 3,
      name: 'Safari',
      icon: 'fa fa-safari'
    },
    {
      id: 4,
      name: 'Opera',
      icon: 'fa fa-opera'
    }
  ];
  public selectIconSelected = this.selectIcon[0].name;

  // select custom option
  public selectCustomSelected = this.selectIcon[0].name;

  // select tag
  public SelectTag;

  // Select Custom Tag
  public customTagselected;
  public customTag: any[] = [];
  public customTagNames = ['Uber', 'Microsoft', 'Flexigen'];

  // select Basic Multi
  public selectMulti: Observable<any[]>;
  public selectMultiSelected = [{ name: 'Karyn Wright' }];

  // Select Multi with group
  public selectMultiGroupSelected = [{ name: 'Karyn Wright' }];

  // Select Multi with Icon
  public multiIconGithubUsers: Observable<any[]>;
  public multiIconGithubUsersSelected = ['anjmao'];

  // Select Multi Custom
  public multiCustomGithubUsersSelected = ['anjmao'];

  // select with limited number of selections
  public selectMultiLimitedSelected = [{ name: 'Karyn Wright' }];

  // Select Custom header footer template
  public selectCustomHeaderFooter = [];
  public selectCustomHeaderFooterSelected = [];

  // select size
  public SelectSizeLargeSelected = 'Adam';
  public SelectSizeDefaultSelected = 'Adam';
  public SelectSizeSmallSelected = 'Adam';

  // multiple sizes
  public MultiLarge: Observable<any[]>;
  public MultiLargeSelected = [{ name: 'Karyn Wright' }];

  public MultiDefault: Observable<any[]>;
  public MultiDefaultSelected = [{ name: 'Karyn Wright' }];

  public MultiSmall: Observable<any[]>;
  public MultiSmallSelected = [{ name: 'Karyn Wright' }];

  /**
   * Constructor
   *
   * @param {DataService} dataService
   * @param {NgbModal} modalService
   */
  constructor(private dataService: DataService, private modalService: NgbModal) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  // select basic
  private selectBasicMethod() {
    this.selectBasicLoading = true;
    this.dataService.getPeople().subscribe(x => {
      this.selectBasic = x;
      this.selectBasicLoading = false;
    });
  }

  // select multi limited selections
  multiLimitedClearModel() {
    this.selectMultiLimitedSelected = [];
  }

  /**
   * Select Custom Tag
   *
   * @param name
   */
  selectAddTagMethod(name) {
    return { name: name, tag: true };
  }

  customHeaderFooterSelectAll() {
    this.selectCustomHeaderFooterSelected = this.selectCustomHeaderFooter.map(x => x.name);
  }

  customHeaderFooterUnselectAll() {
    this.selectCustomHeaderFooterSelected = [];
  }

  // ng-select in model
  modalSelectOpen(modalSelect) {
    this.modalService.open(modalSelect, {
      windowClass: 'modal'
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.selectBasicMethod();

    this.selectMulti = this.dataService.getPeople();

    this.customTagNames.forEach((c, i) => {
      this.customTag.push({ id: i, name: c });
    });

    this.multiIconGithubUsers = this.dataService.getGithubAccounts('anjm');

    this.dataService.getPeople().subscribe(items => {
      this.selectCustomHeaderFooter = items;
    });

    // multiple sizes
    this.MultiLarge = this.dataService.getPeople();
    this.MultiDefault = this.dataService.getPeople();
    this.MultiSmall = this.dataService.getPeople();

    // content header
    this.contentHeader = {
      headerTitle: 'Select',
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
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Select',
            isLink: false
          }
        ]
      }
    };
  }
}
