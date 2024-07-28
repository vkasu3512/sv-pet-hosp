import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../shared/_constants/global-constants';
import { faEnvelope, faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  heading = 'Contact';
  subHeading = '';
  appName = GlobalConstants.APP_NAME;
  supportEmail = GlobalConstants.SUPPORT_EMAIL;
  supportContact = GlobalConstants.SUPPORT_CONTACT;

  mailIcon = faEnvelope;
  mobileIcon = faMobileScreenButton;
  locationIcon = faLocationDot;
  hoursIcon = faClock;

  typeMessage = '';
  displayMessage = '';
  displayMessage1 = '';

  constructor(private share: SharedServiceService) { }

  ngOnInit(): void {
    this.share.getMessage.subscribe(x => {
      this.displayMessage = x;
    })

    this.share.dataSubject.subscribe(x => {
      this.displayMessage1 = x;
    })
  }

  sendMessage() {
    this.share.dataSubject.next(this.typeMessage);
    this.share.setMessage(this.typeMessage);
  }

}
