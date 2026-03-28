import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly navLinks: NavLink[] = [
    { label: 'Accueil',        path: '/',                 exact: true },
    { label: 'L\'Anesthésie',  path: '/about' },
    { label: 'Réanimation',    path: '/intensive-care' },
    { label: 'FAQ',            path: '/faq' },
    { label: 'Contact',        path: '/contact' },
  ];

  protected readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
