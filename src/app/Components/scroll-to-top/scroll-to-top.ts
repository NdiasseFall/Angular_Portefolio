import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  template: `
    @if (isVisible()) {
      <button
        type="button"
        (click)="scrollToTop()"
        class="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label="Retourner en haut de la page"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    }
  `,
})
export class ScrollToTop {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible.set(window.pageYOffset > 350);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
