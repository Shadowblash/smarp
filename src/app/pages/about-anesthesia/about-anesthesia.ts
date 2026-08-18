import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { AnesthesiaHero } from './sections/anesthesia-hero/anesthesia-hero';
import { AnesthesiaWhatIs } from './sections/anesthesia-what-is/anesthesia-what-is';
import { AnesthesiaTypes } from './sections/anesthesia-types/anesthesia-types';
import { AnesthesiaRisks } from './sections/anesthesia-risks/anesthesia-risks';
import { AnesthesiaSafety } from './sections/anesthesia-safety/anesthesia-safety';
import { AnesthesiaCta } from './sections/anesthesia-cta/anesthesia-cta';

@Component({
  selector: 'app-about-anesthesia',
  imports: [AnesthesiaHero, AnesthesiaWhatIs, AnesthesiaTypes, AnesthesiaRisks, AnesthesiaSafety, AnesthesiaCta],
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
