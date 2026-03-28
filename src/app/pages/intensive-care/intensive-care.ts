import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { IcHero } from './sections/ic-hero/ic-hero';
import { IcPacu } from './sections/ic-pacu/ic-pacu';
import { IcIcuBento } from './sections/ic-icu-bento/ic-icu-bento';
import { IcPatientComfort } from './sections/ic-patient-comfort/ic-patient-comfort';
import { IcCta } from './sections/ic-cta/ic-cta';

@Component({
  selector: 'app-intensive-care',
  imports: [IcHero, IcPacu, IcIcuBento, IcPatientComfort, IcCta],
  templateUrl: './intensive-care.html',
})
export class IntensiveCare implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Intensive Care & Recovery',
      description: 'Advanced monitoring and compassionate recovery — 24/7 expert vigilance in our ICU and PACU.',
    });
  }
}
