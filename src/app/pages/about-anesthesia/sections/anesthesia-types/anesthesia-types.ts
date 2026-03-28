import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

interface AnesthesiaType {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-anesthesia-types',
  imports: [],
  templateUrl: './anesthesia-types.html',
})
export class AnesthesiaTypes {
  protected readonly types: AnesthesiaType[] = [
    {
      icon: 'bedtime',
      iconBg: 'bg-primary-fixed',
      iconColor: 'text-primary',
      title: 'Anesthésie générale',
      description: 'État comparable au sommeil, produit par injection intraveineuse et/ou inhalation de vapeurs anesthésiques. Vous êtes totalement inconscient(e) et ne ressentez rien.',
      items: [
        'Perte de conscience totale et contrôlée',
        'Assistance respiratoire (intubation ou masque laryngé)',
        'Indiquée pour les interventions majeures',
      ],
    },
    {
      icon: 'shield_with_heart',
      iconBg: 'bg-secondary-fixed',
      iconColor: 'text-secondary',
      title: 'Anesthésie loco-régionale',
      description: 'Seule la partie du corps concernée est endormie. Différentes techniques permettent de bloquer les nerfs d\'une région spécifique par injection d\'un anesthésique local.',
      items: [
        'Maintien de la conscience (sédation légère possible)',
        'Rachianesthésie et péridurale (moelle épinière)',
        'Bloc nerveux périphérique (membre, région)',
      ],
    },
    {
      icon: 'target',
      iconBg: 'bg-tertiary-fixed',
      iconColor: 'text-tertiary',
      title: 'Anesthésie locale',
      description: 'Injection ciblée pour anesthésier une petite zone précise. Vous restez pleinement conscient(e). Utilisée pour les actes mineurs ou les petites interventions.',
      items: [
        'Zone d\'action très limitée',
        'Patient(e) totalement éveillé(e)',
        'Récupération quasi-immédiate',
      ],
    },
  ];
}
