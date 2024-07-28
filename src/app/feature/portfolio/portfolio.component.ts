import { Component, Input, OnInit } from '@angular/core';
import * as portfolioJson from '../../../assets/json/portfolio.json';
import * as mediStoreJson from '../../../assets/json/medicalStore.json';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  heading = 'Portfolio';
  subHeading = '';
  portfolioList: any[] = [];

  @Input() isPortfolio = true;

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit(): void {
    if (this.isPortfolio) {
      this.portfolioList = (portfolioJson as any).default;
    } else {
      this.portfolioList = (mediStoreJson as any).default;
    }
  }

  getSafeUrl(imageUrl: string) {
    return this.sanitization.bypassSecurityTrustStyle('url(\'' + imageUrl + '\')');
  }

}
