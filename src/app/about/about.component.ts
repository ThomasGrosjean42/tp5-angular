import { Component } from '@angular/core';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(public activiteService: ActiviteService) { }

}
