import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  template: `
    <div class="home-page-wrapper">
      <button class="btn">Hello</button>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) {
    this.route.root.firstChild.data.subscribe(data => this.user = data.user);
  }

  ngOnInit() {
  }
}
