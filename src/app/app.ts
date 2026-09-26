import { Component, inject } from '@angular/core';
import { Header } from './Components/header/header';
import { Hero } from './Components/hero/hero';
import { About } from './Components/about/about';
import { Formation } from './Components/formation/formation';
import { Skills } from './Components/skills/skills';
import { Experience } from './Components/experience/experience';
import { Projet } from './Components/projet/projet';
import { ContactComponent } from './Components/contact/contact';
import { Footer } from './Components/footer/footer';
import { ToastContainerComponent } from './Components/toast-container/toast-container.component';
import { ScrollToTop } from './Components/scroll-to-top/scroll-to-top';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Hero,
    About,
    Formation,
    Skills,
    Experience,
    Projet,
    ContactComponent,
    Footer,
    ToastContainerComponent,
    ScrollToTop,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'portfolio';

  constructor() {
    inject(ThemeService);
  }
}
