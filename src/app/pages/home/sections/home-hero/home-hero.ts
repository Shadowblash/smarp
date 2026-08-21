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
   * Cadrage vertical : un médecin de l'équipe en tenue de bloc, sujet centré qui
   * résiste au dégradé navy appliqué sur le bord gauche du panneau.
   */
  protected readonly heroImage = {
    src: '/smarp-3.jpeg',
    alt: "Médecin anesthésiste-réanimateur en tenue de bloc, masque et calot, vérifiant un fibroscope avant l'induction",
  };
}
