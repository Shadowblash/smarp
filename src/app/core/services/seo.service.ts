import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly siteName = 'SMARP';

  setPage({ title, description, keywords }: PageMeta): void {
    this.title.setTitle(`${title} — ${this.siteName}`);
    this.meta.updateTag({ name: 'description', content: description });

    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: `${title} — ${this.siteName}` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
