import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories: string[] = [];

  constructor(public service: Portfolio) {
    this.skillCategories = this.service.getSkillCategories();
  }

  getSkillsByCategory(category: string) {
    return this.service.getSkillsByCategory(category);
  }
}
