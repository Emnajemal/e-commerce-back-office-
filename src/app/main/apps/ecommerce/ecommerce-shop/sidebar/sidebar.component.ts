import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ecommerce-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../ecommerce-shop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EcommerceSidebarComponent implements OnInit {
  // Public
  public sliderPriceValue = [1, 100];

  constructor() {}

  ngOnInit(): void {}
}
