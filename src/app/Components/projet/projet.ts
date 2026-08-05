import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projet',
  imports: [AsyncPipe, ScrollRevealDirective],
  templateUrl: './projet.html',
  styleUrl: './projet.css',
})
export class Projet {
   constructor(public service: Portfolio) {}
}
