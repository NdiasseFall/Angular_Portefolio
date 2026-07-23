import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [AsyncPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  constructor(public service: Portfolio) {}
}
