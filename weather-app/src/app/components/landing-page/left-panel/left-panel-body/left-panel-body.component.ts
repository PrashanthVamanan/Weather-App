import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-left-panel-body',
  templateUrl: './left-panel-body.component.html',
  styleUrls: ['./left-panel-body.component.scss']
})
export class LeftPanelBodyComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
