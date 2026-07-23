import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-formation',
  imports: [AsyncPipe],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class Formation {
  constructor(public service: Portfolio) {}
}
