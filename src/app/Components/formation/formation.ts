import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-formation',
  imports: [AsyncPipe, ScrollRevealDirective],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class Formation {
  constructor(public service: Portfolio) {}
}
