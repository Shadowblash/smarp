import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  templateUrl: './home-hero.html',
})
export class HomeHero {
  /**
   * Hero image — photographie prise au bloc opératoire de l'Hôpital Privé de la Loire.
   * Cadrage vertical : deux soignants penchés sur le patient, composition centrée qui
   * résiste au dégradé navy appliqué sur le bord gauche du panneau.
   */
  protected readonly heroImage = {
    src: '/smarp-5.jpeg',
    alt: 'Deux soignants en tenue stérile penchés au-dessus du patient au bloc opératoire — attention constante et gestes précis',
  };
}
