import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  isMobile: boolean = false;
  carouselStrings = ['growth', 'technology', 'organization', 'customer', 'product', 'brand'];

  mailChimpKeys = {
    sponsor: 'b94c0dd78d',
    solutionist: '4032850640',
    partner: '5df8a92947'
  };

  quoteSlideConfig = {
    fade: true,
    cssEase: 'linear',
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  carouselSlideConfig = {
    fade: true,
    cssEase: 'linear',
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  constructor() {
  }

  ngOnInit() {
    this.isLoading = true;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      this.isMobile = true;
    }
  }

}
