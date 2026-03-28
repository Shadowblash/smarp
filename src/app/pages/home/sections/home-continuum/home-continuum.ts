import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface ContinuumStage {
  stage: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  featured: boolean;
}

@Component({
  selector: 'app-home-continuum',
  imports: [AnimateOnScrollDirective],
  templateUrl: './home-continuum.html',
})
export class HomeContinuum {
  protected readonly stages: ContinuumStage[] = [
    {
      stage: '01',
      icon: 'clinical_notes',
      title: 'Consultation pré-anesthésique',
      description: 'Évaluation médicale complète et préparation personnalisée.',
      detail: 'Réalisée plusieurs jours avant l\'intervention, elle permet d\'adapter le protocole d\'anesthésie à votre état de santé.',
      featured: false,
    },
    {
      stage: '02',
      icon: 'vital_signs',
      title: 'Prise en charge per-opératoire',
      description: 'Surveillance constante et sécurité maximale pendant l\'intervention.',
      detail: 'Un médecin anesthésiste est à vos côtés tout au long de l\'opération, ajustant les traitements en temps réel.',
      featured: true,
    },
    {
      stage: '03',
      icon: 'restore',
      title: 'Salle de réveil — SSPI',
      description: 'Surveillance attentive jusqu\'au retour en chambre.',
      detail: 'Vous êtes pris(e) en charge par une équipe infirmière spécialisée dès la fin de l\'intervention, sous responsabilité médicale.',
      featured: false,
    },
  ];
}
