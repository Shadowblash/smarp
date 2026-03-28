import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { AaHero } from './sections/aa-hero/aa-hero';
import { AaWhatIs } from './sections/aa-what-is/aa-what-is';
import { AaTypes } from './sections/aa-types/aa-types';
import { AaRisks } from './sections/aa-risks/aa-risks';
import { AaSafety } from './sections/aa-safety/aa-safety';
import { AaCta } from './sections/aa-cta/aa-cta';

@Component({
  selector: 'app-about-anesthesia',
  imports: [AaHero, AaWhatIs, AaTypes, AaRisks, AaSafety, AaCta],
  templateUrl: './about-anesthesia.html',
})
export class AboutAnesthesia implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'L\'Anesthésie',
      description: 'Comprendre votre anesthésie : types, surveillance, risques et sécurité. Information médicale complète par l\'Unité d\'Anesthésie Réanimation SMARP.',
    });
  }
}
