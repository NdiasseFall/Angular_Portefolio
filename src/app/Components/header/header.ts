import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { ThemeToggle } from '../theme-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private elementRef = inject(ElementRef);

  menuOpen = signal(false);

  readonly navLinks = [
    { href: '/home', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/education', label: 'Formation' },
    { href: '/skills', label: 'Compétences' },
    { href: '/experience', label: 'Expérience' },
    { href: '/projects', label: 'Projets' },
    { href: '/contact', label: 'Contact' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.menuOpen()) {
      return;
    }

    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
  }
}
