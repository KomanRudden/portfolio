import { StaticService } from '../../service/static.service';
import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  technologies: any;

  constructor(private service: StaticService) {
    this.service.getTechnologies()
      .subscribe(response => {
        this.technologies = response
      },
      err => console.error(err)
    );
  }

}
