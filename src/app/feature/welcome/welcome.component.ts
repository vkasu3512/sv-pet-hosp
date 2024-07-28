import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../shared/_constants/global-constants';
import { faHeart, faShieldDog, faPaw, faHouseChimneyMedical, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons';
import * as testimonialJson from '../../../assets/json/testimonial.json';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  appName = GlobalConstants.APP_NAME;
  supportContact = GlobalConstants.SUPPORT_CONTACT;
  waContact = GlobalConstants.WA_CONTACT;
  
  vetCare = faHeart;
  gvIcon = faShieldDog;
  petDiagIcon = faPaw;
  petStoreIcon = faHouseChimneyMedical;
  twitterIcon = faTwitter;
  fbIcon = faFacebook;
  instaIcon = faInstagram;
  waIcon = faWhatsapp;
  quoLeftIcon = faQuoteLeft;
  quoRightIcon = faQuoteRight;
  starIcon = faStar;
  userIcon = faFaceGrinStars;

  isNavOpened = false;

  services: any[] = [];
  testimonials: any[] = [];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    // config.keyboard = false;
  }

  ngOnInit(): void {
    this.services = [
      { title: 'Veterinary Care', icon: this.vetCare },
      { title: 'Pet Grooming & Vaccination', icon: this.gvIcon },
      { title: 'Pet Diagnosis', icon: this.petDiagIcon },
      { title: 'Pet Store & Medication', icon: this.petStoreIcon }
    ];

    this.testimonials = (testimonialJson as any).default;
  }

  openModal(bookAppointmentModal: any) {
    this.modalService.open(bookAppointmentModal);
  }

  openSlider() {
    this.isNavOpened = true;
  }

  closeMobileNav() {
    
  }

}
