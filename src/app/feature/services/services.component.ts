import { Component, OnInit } from '@angular/core';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShieldDog, faPaw, faHouseChimneyMedical, faPills, faBone, faSyringe, faScissors } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  heading = 'Services';
  subHeading = 'Your pet is an important part of your family, and when he or she is ill, you want the best medical care available.';

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { icon: faHeart, service: 'Consultation', desc: "Do not hesitate to get help, please do consult via phone. Also, do come & visit our clinic in owrking hours." },
      { icon: faSyringe, service: 'Surgical Services', desc: 'Get the best treatment for your pet when he/she requires any surgeries. Care for your pet as we have doctor specialized in any type of surgeries.' },
      { icon: faPaw, service: 'Diagnostic Services', desc: 'In the treatment of an Injury or illness requiring cutting, suturing, and therapeutic endoscopic procedures.' },
      { icon: faShieldDog, service: 'Vaccination', desc: 'Keep your pet away from virus. Get any type of vaccinations for your pet to feel safe and strong.' },
      { icon: faDog, service: 'Deworming', desc: 'Some medicines have side effects. Before use dewarming medicines, Feel free to get consultation on right medication.' },
      { icon: faScissors, service: 'Grooming', desc: 'To keep your pet clean and stylish. We are here to provide grooming services too.' },
      { icon: faBone, service: 'Nutritional Counselling', desc: 'Happy pet is healthy pet. Nutrition helps pet to make healthy food choices and form healthy eating habits.' },
      { icon: faHouseChimneyMedical, service: 'Medical & Health Care', desc: 'We treat any kind of diseases to make your pet healthy.' },
      { icon: faPills, service: 'Pet Medication', desc: 'We are here to help you with Pet Medical Store available 24X7.' }
    ]
  }

}
