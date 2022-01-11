import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() { }
  style: CSSStyleDeclaration;
  ngOnInit() {
    this.style = document.getElementById('site').style;
  }

  signout() {
    //this.auth.signout();
  }
}
