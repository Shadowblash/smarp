import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  templateUrl: './home-hero.html',
})
export class HomeHero {
  /**
   * Hero image — swap src to /assets/images/hero-main.jpg once local assets are ready.
   * Unsplash photo 1631217868264: physician in warm consultation with a patient,
   * clean clinical environment, naturally wide composition.
   */
  protected readonly heroImage = {
    src: 'https://www.clinique-charcot.fr/sites/default/files/2022-09/anesthesie.jpg',
    alt: 'Médecin anesthésiste en consultation avec une patiente dans un environnement clinique calme et bienveillant — échange attentif, cadre moderne et rassurant',
  };
}
