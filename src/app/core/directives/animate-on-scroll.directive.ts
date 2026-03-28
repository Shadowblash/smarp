import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * AnimateOnScrollDirective
 *
 * Adds a `reveal` class to the host element (making it opacity:0 / translateY)
 * and adds `revealed` when the element enters the viewport, triggering the CSS
 * transition defined in styles.scss.
 *
 * SSR-safe: uses isPlatformBrowser + double requestAnimationFrame to prevent
 * hydration flashes (SSR renders the element fully visible, JS adds the hidden
 * state only after the browser has painted).
 *
 * Usage:
 *   <div animateOnScroll>...</div>
 *   <div animateOnScroll [revealDelay]="150">...</div>  ← stagger
 */
@Directive({
  selector: '[animateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  /** Delay before the reveal transition plays, in ms. Use for staggered groups. */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.el.nativeElement;

    // Double rAF pattern:
    // rAF 1 → add 'reveal' (element becomes opacity:0 / translateY)
    // rAF 2 → start observing (browser has painted the hidden state)
    // This prevents SSR hydration flashes where elements are visible then
    // instantly hidden before the observer can fire.
    requestAnimationFrame(() => {
      if (this.revealDelay > 0) {
        el.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
      }
      el.classList.add('reveal');

      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            this.observer?.unobserve(el);
          }
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px', // trigger 40px before the bottom edge
        },
      );

      requestAnimationFrame(() => this.observer!.observe(el));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
