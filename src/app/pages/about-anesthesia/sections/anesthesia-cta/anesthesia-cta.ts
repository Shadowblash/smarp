import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface TrustItem {
  icon: string;
  label: string;
  detail: string;
}

@Component({
  selector: 'app-anesthesia-cta',
  imports: [RouterLink],
  templateUrl: './anesthesia-cta.html',
})
export class AnesthesiaCta {
  protected readonly trustItems: TrustItem[] = [
    {
      icon: 'verified_user',
      label: 'Consentement éclairé',
      detail: 'Document d\'information fourni avant toute procédure.',
    },
    {
      icon: 'question_answer',
      label: 'Questions bienvenues',
      detail: 'Posez toutes vos questions lors de la consultation pré-anesthésique.',
    },
    {
      icon: 'schedule',
      label: 'Consultation préalable obligatoire',
      detail: 'Réalisée plusieurs jours avant l\'intervention pour les actes non urgents.',
    },
  ];
}
