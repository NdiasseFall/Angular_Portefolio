import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-formation',
  imports: [ScrollRevealDirective],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class Formation {
  constructor(public service: Portfolio) {}
}
