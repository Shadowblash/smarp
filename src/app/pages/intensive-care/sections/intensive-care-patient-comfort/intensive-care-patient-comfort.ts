import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ComfortItem {
  label: string;
}

@Component({
  selector: 'app-intensive-care-patient-comfort',
  imports: [RouterLink],
  templateUrl: './intensive-care-patient-comfort.html',
})
export class IntensiveCarePatientComfort {
  protected readonly items: ComfortItem[] = [
    { label: 'Plans de gestion de la douleur personnalisés' },
    { label: 'Protocoles de silence pour un sommeil réparateur' },
    { label: 'Prise en charge centrée sur la famille et la communication' },
  ];
}
