import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface ExpertiseCard {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-home-expertise',
  imports: [AnimateOnScrollDirective],
  templateUrl: './home-expertise.html',
})
export class HomeExpertise {
  protected readonly cards: ExpertiseCard[] = [
    {
      icon: 'medical_services',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      title: 'Anesthésie',
      description: 'Prise en charge personnalisée de chaque patient selon son profil et l\'acte chirurgical. Techniques générales, loco-régionales et obstétricales.',
      items: [
        'Anesthésie générale & loco-régionale',
        'Anesthésie obstétricale (péridurale)',
        'Consultation pré-anesthésique',
      ],
    },
    {
      icon: 'ecg_heart',
      iconBg: 'bg-secondary-fixed',
      iconColor: 'text-secondary',
      title: 'Réanimation & Soins Intensifs',
      description: 'Surveillance et prise en charge des patients en état critique. Notre unité est équipée des dernières technologies de monitoring et de support vital.',
      items: [
        'Unité de réanimation (24h/24)',
        'Salle de réveil — SSPI',
        'Support multi-organes',
      ],
    },
  ];
}
