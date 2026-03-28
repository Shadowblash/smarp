import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface RiskItem {
  icon: string;
  label: string;
  detail: string;
}

@Component({
  selector: 'app-anesthesia-risks',
  imports: [],
  templateUrl: './anesthesia-risks.html',
})
export class AnesthesiaRisks {
  protected readonly generalRisks: RiskItem[] = [
    {
      icon: 'sick',
      label: 'Nausées et vomissements',
      detail: 'Devenus rares grâce aux nouvelles techniques et médicaments. Pris en charge dès l\'apparition.',
    },
    {
      icon: 'voice_selection',
      label: 'Maux de gorge passagers',
      detail: 'Possibles en cas d\'intubation ou de masque laryngé. Disparaissent en quelques jours.',
    },
    {
      icon: 'psychology',
      label: 'Troubles passagers de la mémoire',
      detail: 'Baisse temporaire de la concentration ou de la mémoire dans les heures suivant l\'anesthésie.',
    },
    {
      icon: 'vaccines',
      label: 'Rougeur au site d\'injection',
      detail: 'Peut apparaître sur la veine utilisée pour l\'injection intraveineuse. Disparaît en quelques jours.',
    },
  ];

  protected readonly rareRisks: RiskItem[] = [
    {
      icon: 'warning',
      label: 'Complications sérieuses',
      detail: 'Ne surviennent que dans de très rares cas — plusieurs centaines de milliers d\'anesthésies sans incident.',
    },
    {
      icon: 'monitor_heart',
      label: 'Réactions allergiques graves',
      detail: 'Extrêmement rares. Notre équipe est formée et équipée pour les détecter et les traiter immédiatement.',
    },
    {
      icon: 'accessibility_new',
      label: 'Compression nerveuse',
      detail: 'Liée à la position sur la table d\'opération. Peut entraîner un engourdissement temporaire. Résolution habituelle en quelques jours ou semaines.',
    },
  ];
}
