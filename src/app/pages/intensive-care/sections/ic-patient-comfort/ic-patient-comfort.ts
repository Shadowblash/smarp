import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface ComfortItem {
  label: string;
}

@Component({
  selector: 'app-ic-patient-comfort',
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './ic-patient-comfort.html',
})
export class IcPatientComfort {
  protected readonly items: ComfortItem[] = [
    { label: 'Plans de gestion de la douleur personnalisés' },
    { label: 'Protocoles de silence pour un sommeil réparateur' },
    { label: 'Prise en charge centrée sur la famille et la communication' },
  ];
}
