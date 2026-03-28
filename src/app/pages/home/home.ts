import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { HomeHero } from './sections/home-hero/home-hero';
import { HomeExpertise } from './sections/home-expertise/home-expertise';
import { HomeContinuum } from './sections/home-continuum/home-continuum';
import { HomeTrustBanner } from './sections/home-trust-banner/home-trust-banner';
import { HomeSafetyProtocol } from './sections/home-safety-protocol/home-safety-protocol';
import { HomeTeam } from './sections/home-team/home-team';

@Component({
  selector: 'app-home',
  imports: [HomeHero, HomeExpertise, HomeContinuum, HomeTrustBanner, HomeSafetyProtocol, HomeTeam],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Accueil',
      description: 'SMARP — Unité d\'Anesthésie Réanimation de l\'Hôpital Privé de la Loire. 18 médecins spécialistes, disponibles 24h/24 à Saint-Étienne.',
    });
  }
}
