import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { IntensiveCareHero } from './sections/intensive-care-hero/intensive-care-hero';
import { IntensiveCareRecovery } from './sections/intensive-care-recovery/intensive-care-recovery';
import { IntensiveCareBento } from './sections/intensive-care-bento/intensive-care-bento';
import { IntensiveCarePatientComfort } from './sections/intensive-care-patient-comfort/intensive-care-patient-comfort';
import { IntensiveCareCta } from './sections/intensive-care-cta/intensive-care-cta';

@Component({
  selector: 'app-intensive-care',
  imports: [IntensiveCareHero, IntensiveCareRecovery, IntensiveCareBento, IntensiveCarePatientComfort, IntensiveCareCta],
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
