import { Component } from '@angular/core';
import { Portfolio } from '../../services/portfolio';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [AsyncPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public service: Portfolio) {}
}
