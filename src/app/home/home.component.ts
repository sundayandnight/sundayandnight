import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  carouselStrings = ['growth', 'technology', 'organization', 'customer', 'product', 'brand'];

  mailChimpKeys = {
    sponsor: 'b94c0dd78d',
    solutionist: '4032850640',
    partner: '5df8a92947'
  };

  constructor(config: NgbCarouselConfig) {
    config.interval = 30000;
  }

  ngOnInit() {
    this.isLoading = true;
  }

}
