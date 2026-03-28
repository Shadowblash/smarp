import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { AnimateOnScrollDirective } from '../../core/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Contact',
      description: 'Contactez le service d\'anesthésie-réanimation SMARP : 39 boulevard de la Palle, 42030 Saint-Étienne. Tél. 04.77.42.27.00 — disponible 24h/24.',
    });
  }
}
