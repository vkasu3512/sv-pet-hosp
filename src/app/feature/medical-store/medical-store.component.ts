import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../shared/_constants/global-constants';
import { faEnvelope, faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-medical-store',
  templateUrl: './medical-store.component.html',
  styleUrls: ['./medical-store.component.scss']
})
export class MedicalStoreComponent implements OnInit {
  heading = 'Medical Store';
  subHeading = '';

  mediStoreName = GlobalConstants.MEDI_STORE_NAME;
  mediStoreContact = GlobalConstants.MEDI_STORE_CONTACT;
  supportEmail = GlobalConstants.SUPPORT_EMAIL;

  mailIcon = faEnvelope;
  mobileIcon = faMobileScreenButton;
  locationIcon = faLocationDot;
  hoursIcon = faClock;
  
  constructor() { }

  ngOnInit(): void {
  }

}
