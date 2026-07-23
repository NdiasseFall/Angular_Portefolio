import { Component, inject } from '@angular/core';
import { ThemeToggle } from '../theme-toggle';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  themeService = inject(ThemeService);
}
