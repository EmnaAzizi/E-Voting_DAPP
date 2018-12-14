import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
//import * as $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
  
})
export class AppComponent implements AfterViewInit {

 // @ViewChild('sliderContent') sliderElement: ElementRef;

  ngAfterViewInit() {
     // your plugin have to be init after the view are init. That means when Angular have finish to add html on DOM.
      // Best approch is to use ViewChild to consume HTMLElement in Angular.
     // $(this.sliderElement.nativeElement).owlCarousel();
      // Uncomment this line if you want to let jQuery target himself your element.
      // $(".testimonials_slider").owlCarousel();
      $.getScript('assets/vendors/owl-carousel/owl.carousel.min.js', function(){});
  }

}
