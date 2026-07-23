import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
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
