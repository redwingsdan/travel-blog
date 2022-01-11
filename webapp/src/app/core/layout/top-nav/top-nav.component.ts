import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() navData;
  @Input() currentUser;
  @Output() navAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}
