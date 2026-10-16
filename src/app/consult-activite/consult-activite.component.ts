import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  imports: [FormsModule],
  templateUrl: './consult-activite.component.html',
  styleUrl: './consult-activite.component.css'
})
export class ConsultActiviteComponent {
  id: number;
  activite: string;
  edition = false;

  constructor(private route: ActivatedRoute, private router: Router, private activiteService: ActiviteService) {
    const param = this.route.snapshot.paramMap.get('id');
    this.id = Number(param);
    this.activite = param === null ? '' : this.activiteService.objectifs[this.id];
  }

  supprimeElem(i: number) {
    this.activiteService.removeItem(i);
    this.router.navigate(['']);
  }

  modifier() {
    this.edition = true;
  }

  sauvegarder() {
    this.activiteService.modifItem(this.id, this.activite);
    this.edition = false;
  }

  retour() {
    this.router.navigate(['']);
  }
}
