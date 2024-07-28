import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../shared/_constants/global-constants';
import { faQuoteLeft, faQuoteRight, faDog, faHandSparkles, faStarOfLife, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  heading = 'About Us';
  subHeading = '';
  appName = GlobalConstants.APP_NAME;
  items: any[] = [];

  quoLeftIcon = faQuoteLeft;
  quoRightIcon = faQuoteRight;

  displayMessage = '';
  displayMessage1 = '';

  constructor(private share: SharedServiceService) { }

  ngOnInit(): void {
    this.items = [
      { icon: faDog, desc: 'Ensure pets and their owners live long, happy and healthy lives together in harmony.' },
      { icon: faHandSparkles, desc: 'Provide a pleasant, clean and friendly environment for our patients.' },
      { icon: faStarOfLife, desc: 'Offer the best quality medical options to our patients by keeping the best interests.' },
      { icon: faStethoscope, desc: 'Continue to improve our knowledge & skills to serve the most innovative healthcare.' },
    ]

    this.share.getMessage.subscribe(x => {
      this.displayMessage = x;
    })

    this.share.dataSubject.subscribe(x => {
      this.displayMessage1 = x;
    })
  }

}
