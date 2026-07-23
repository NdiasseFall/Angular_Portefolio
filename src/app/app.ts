import { Component, inject } from '@angular/core';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { Experience } from './Components/experience/experience';
import { Skills } from './Components/skills/skills';
import { Formation } from './Components/formation/formation';
import { About } from './Components/about/about';
import { Hero } from './Components/hero/hero';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Experience, Skills, Formation, About, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'portfolio';

  constructor() {
    inject(ThemeService);
  }
}
