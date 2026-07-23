import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal(this.getInitialTheme());

  constructor() {
    // Apply theme immediately on initialization
    this.applyTheme(this.isDark());

    // Watch for signal changes
    effect(() => {
      const isDark = this.isDark();
      this.applyTheme(isDark);
    });
  }

  private getInitialTheme(): boolean {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }

    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }

  private applyTheme(isDark: boolean) {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (isDark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }

  toggleTheme() {
    this.isDark.update((value) => !value);
  }
}
