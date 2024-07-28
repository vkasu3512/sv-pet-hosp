import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { GlobalConstants } from 'src/app/shared/_constants/global-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appLogo = GlobalConstants.APP_LOGO;
  supportEmail = GlobalConstants.SUPPORT_EMAIL;
  supportContact = GlobalConstants.SUPPORT_CONTACT;
  waContact = GlobalConstants.WA_CONTACT;

  twitterIcon = faTwitter;
  fbIcon = faFacebook;
  instaIcon = faInstagram;
  waIcon = faWhatsapp;
  mailIcon = faEnvelope;
  mobileIcon = faMobileScreenButton;
  barIcon = faBars;
  closeIcon = faXmark;

  isNavOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMobileNav() {
    this.isNavOpened = true;
  }

  closeMobileNav() {
    this.isNavOpened = false;
  }

}
