import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../core/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home-team',
  imports: [],
  templateUrl: './home-team.html',
})
export class HomeTeam {
  protected readonly doctors: string[] = [
    'Dr Jordan BAILLY',
    'Dr Gérald BAUDRY',
    'Dr Jérémy BAYET',
    'Dr Jordan BONSIGNORE',
    'Dr Pierre BOUCHER',
    'Dr Marc BOUCHER',
    'Dr Laetitia BURNOL',
    'Dr Laurane CHALVET',
    'Dr Benoît CREMILLIEUX',
    'Dr Magalie DUMAS',
    'Dr Michaël FAURE',
    'Dr Julie GALLAND',
    'Dr Léandre GIRARD',
    'Dr Luca GUIZOUARN',
    'Dr Matthis LEONARD',
    'Dr Jérémy MALLARD',
    'Dr Jean PASCAL',
    'Dr Marc VERCRUYSSE',
  ];
}
