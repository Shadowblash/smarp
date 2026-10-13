import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'SMARP';
  private readonly siteUrl = 'https://smarp-anesthesie.fr';

  setPage({ title, description, keywords }: PageMeta): void {
    this.title.setTitle(`${title} — ${this.siteName}`);
    this.meta.updateTag({ name: 'description', content: description });

    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: `${title} — ${this.siteName}` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    const path = this.router.url.split(/[?#]/)[0];
    const url = path === '/' ? `${this.siteUrl}/` : `${this.siteUrl}${path}`;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
