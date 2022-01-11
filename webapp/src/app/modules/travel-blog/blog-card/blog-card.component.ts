import { Component, Input, OnInit } from '@angular/core';
import { TravelBlog } from '../../../shared/travel-blog/travel-blog.interface';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: TravelBlog;
  constructor() {}

  ngOnInit() {
  }
}
