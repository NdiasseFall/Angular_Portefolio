import { Component, inject } from '@angular/core';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'portfolio';

  constructor() {
    inject(ThemeService);
  }
}
