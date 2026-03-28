import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterColumn {
  title: string;
  links: { label: string; path: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns: FooterColumn[] = [
    {
      title: 'Informations',
      links: [
        { label: 'L\'Anesthésie',            path: '/about' },
        { label: 'Réanimation & SSPI',        path: '/intensive-care' },
        { label: 'Notre équipe médicale',     path: '/' },
        { label: 'Contact & Urgences',        path: '/contact' },
      ],
    },
    {
      title: 'Ressources patients',
      links: [
        { label: 'Document d\'information',      path: '/about' },
        { label: 'Préparer votre anesthésie',    path: '/about' },
        { label: 'Votre consultation pré-op.',   path: '/about' },
        { label: 'La salle de réveil (SSPI)',     path: '/intensive-care' },
      ],
    },
  ];
}
