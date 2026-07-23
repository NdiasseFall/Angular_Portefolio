import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      (click)="themeService.toggleTheme()"
      class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      @if (!themeService.isDark()) {
        <span class="text-xl">🌙</span>
      } @else {
        <span class="text-xl">☀️</span>
      }
    </button>
  `,
})
export class ThemeToggle {
  themeService = inject(ThemeService);
}
