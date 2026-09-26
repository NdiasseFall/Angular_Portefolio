import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      type="button"
      (click)="themeService.toggleTheme()"
      class="inline-flex items-center justify-center min-w-11 min-h-11 p-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
      [attr.aria-label]="themeService.isDark() ? 'Activer le thème clair' : 'Activer le thème sombre'"
      [attr.aria-pressed]="themeService.isDark()"
      [attr.title]="themeService.isDark() ? 'Thème clair' : 'Thème sombre'"
    >
      @if (themeService.isDark()) {
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.06-1.06M6.696 6.696l-1.06-1.06m12.728 0l-1.06 1.06M6.696 17.304l-1.06 1.06M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
          />
        </svg>
      } @else {
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      }
    </button>
  `,
})
export class ThemeToggle {
  themeService = inject(ThemeService);
}
