import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle theme', () => {
    const initialValue = service.isDark();
    service.toggleTheme();
    TestBed.flushEffects();
    expect(service.isDark()).toBe(!initialValue);
  });

  it('should add dark class to document when dark mode is enabled', () => {
    service.isDark.set(true);
    TestBed.flushEffects();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should remove dark class from document when dark mode is disabled', () => {
    service.isDark.set(true);
    TestBed.flushEffects();
    service.isDark.set(false);
    TestBed.flushEffects();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should persist theme to localStorage', () => {
    service.isDark.set(true);
    TestBed.flushEffects();
    expect(localStorage.getItem('theme')).toBe('dark');

    service.isDark.set(false);
    TestBed.flushEffects();
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
