import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('objectifs', [
      transition('void => *, :increment, :decrement', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  btnText = 'Ajouter un item';
  objectifText = '';

  constructor(public activiteService: ActiviteService, private router: Router) { }

  addItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.objectifText = '';
  }

  voirActivite(i: number) {
    this.router.navigate(['/consultAct', i]);
  }
}
