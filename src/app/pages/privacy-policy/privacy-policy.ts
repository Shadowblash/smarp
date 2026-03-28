import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Politique de confidentialité',
      description: 'Politique de confidentialité du site SMARP — traitement des données personnelles, droits RGPD, cookies.',
    });
  }
}
