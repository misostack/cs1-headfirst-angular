import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ui-container',
  templateUrl: './ui.container.html',
  styleUrls: ['./ui.container.scss'],
})
export class UIContainer implements OnInit {
  @HostBinding('attr.class') cssClasses = 'app-module-container app-ui-container';
  constructor() { }

  ngOnInit(): void {
  }

}
