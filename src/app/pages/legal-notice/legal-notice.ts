import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
})
export class LegalNotice implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Mentions légales',
      description: 'Mentions légales du site SMARP — Société Mutualiste d\'Anesthésie-Réanimation de la Palle, Saint-Étienne.',
    });
  }
}
