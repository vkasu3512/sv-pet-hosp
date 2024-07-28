import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHandHoldingMedical, faHospital } from '@fortawesome/free-solid-svg-icons';
import { GlobalConstants } from 'src/app/shared/_constants/global-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appName = GlobalConstants.APP_NAME;
  supportAddress = GlobalConstants.SUPPORT_ADDRESS;
  supportEmail = GlobalConstants.SUPPORT_EMAIL;
  supportContact = GlobalConstants.SUPPORT_CONTACT;
  mediStoreContact = GlobalConstants.MEDI_STORE_CONTACT;
  waContact = GlobalConstants.WA_CONTACT;
  currentDate = Date.now();

  twitterIcon = faTwitter;
  fbIcon = faFacebook;
  instaIcon = faInstagram;
  waIcon = faWhatsapp;
  clinicIcon = faHospital;
  medicalStoreIcon = faHandHoldingMedical;

  footerWorkingHours: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.footerWorkingHours = [
      { title: 'Pet Clinic', icon: this.clinicIcon, section1: 'Monday-Saturday', section2: '5PM - 8PM', section3: 'Sunday', section4: '9AM - 1PM' },
      { title: 'Medical Store', icon: this.medicalStoreIcon, section1: 'Monday-Sunday', section2: '9AM - 9PM', section3: 'Contact', section4: this.mediStoreContact }
    ]
  }

}
