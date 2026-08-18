import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface SafetyItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-anesthesia-safety',
  imports: [],
  templateUrl: './anesthesia-safety.html',
})
export class AnesthesiaSafety {
  protected readonly items: SafetyItem[] = [
    {
      icon: 'analytics',
      title: 'Surveillance permanente',
      description: 'Un médecin anesthésiste-réanimateur est à vos côtés 100% du temps, surveillant chaque battement de cœur et chaque respiration avec une précision constante.',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Technologie de pointe',
      description: 'Nous utilisons les dernières technologies de neuromonitoring et de suivi hémodynamique pour adapter votre prise en charge en temps réel.',
    },
    {
      icon: 'psychology_alt',
      title: 'Prise en charge post-opératoire',
      description: 'Notre suivi se prolonge en salle de réveil (SSPI), pour assurer une transition confortable et sécurisée pendant la disparition de l\'anesthésie.',
    },
  ];
}
