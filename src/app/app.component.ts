import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { GlobalConstants } from './shared/_constants/global-constants';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appName = GlobalConstants.APP_NAME;
  waContact = GlobalConstants.WA_CONTACT;

  spinnerIcon = faSnowflake;
  waIcon = faWhatsapp;

  isLoading = true;
  loadingInternal: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      this.isLoading = true;
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.loadingInternal = setInterval(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  ngOnDestroy() {
    if (this.loadingInternal) {
      clearInterval(this.loadingInternal);
    }

    array.forEach(element => {
      
    });
  }
}
