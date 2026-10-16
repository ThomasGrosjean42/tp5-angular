import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  btnText = 'Ajouter un item';
  objectifText = '';

  constructor(public activiteService: ActiviteService, private monRouteur: Router) { }

  addItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.objectifText = '';
    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 1000);
  }

  voirActivite(i: number) {
    this.monRouteur.navigate(['/consultAct', i]);
  }
}
