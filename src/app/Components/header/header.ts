import { Component, ElementRef, HostListener, OnInit, inject, signal } from '@angular/core';
import { ThemeToggle } from '../theme-toggle';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private elementRef = inject(ElementRef);

  menuOpen = signal(false);
  activeSection = signal('home');

  readonly navLinks = [
    { id: 'home', href: '#home', label: 'Accueil' },
    { id: 'about', href: '#about', label: 'À propos' },
    { id: 'formation', href: '#formation', label: 'Formation' },
    { id: 'skills', href: '#skills', label: 'Compétences' },
    { id: 'experience', href: '#experience', label: 'Expérience' },
    { id: 'projects', href: '#projects', label: 'Projets' },
    { id: 'contact', href: '#contact', label: 'Contact' },
  ];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollToSection(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMenu();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      this.activeSection.set(targetId);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const scrollPosition = window.pageYOffset + 120;
    for (const link of this.navLinks) {
      const element = document.getElementById(link.id);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(link.id);
          break;
        }
      }
    }
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
