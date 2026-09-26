import { Component, inject, signal } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { Projet as ProjetModel } from '../../models';

@Component({
  selector: 'app-projet',
  imports: [ScrollRevealDirective],
  templateUrl: './projet.html',
  styleUrl: './projet.css',
})
export class Projet {
  public service = inject(Portfolio);

  selectedFilter = signal<string>('Tous');
  readonly categories = ['Tous', 'Web', 'UI/UX'];

  filteredProjects(): ProjetModel[] {
    const all = this.service.getProjets();
    const filter = this.selectedFilter();
    if (filter === 'Tous') {
      return all;
    }
    return all.filter((p) => p.category === filter);
  }

  setFilter(category: string): void {
    this.selectedFilter.set(category);
  }
}
