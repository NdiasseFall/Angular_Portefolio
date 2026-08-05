import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastContainerComponent } from './toast-container.component';
import { ToastService } from '../services/toast.service';

describe('ToastContainerComponent', () => {
  let component: ToastContainerComponent;
  let fixture: ComponentFixture<ToastContainerComponent>;
  let toastService: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastContainerComponent],
      providers: [ToastService]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastContainerComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject toast service', () => {
    expect(component.toastService).toBeTruthy();
  });

  it('should render toasts when present', () => {
    // Add a toast
    toastService.showSuccess('Test message');

    fixture.detectChanges();

    // Check if toast container exists
    const toastContainer = fixture.nativeElement.querySelector('.pointer-events-auto');
    expect(toastContainer).toBeTruthy();

    // Check if toast message is displayed
    const toastMessage = fixture.nativeElement.querySelector('.text-green-600');
    expect(toastMessage).toBeTruthy();
    expect(toastMessage.textContent).toContain('Test message');
  });

  it('should not render anything when no toasts', () => {
    fixture.detectChanges();

    // Should not have any toast elements
    const toastElements = fixture.nativeElement.querySelectorAll('.pointer-events-auto');
    expect(toastElements.length).toBe(0);
  });

  it('should remove toast when dismiss button is clicked', () => {
    // Add a toast
    toastService.showSuccess('Test message');

    fixture.detectChanges();

    // Get dismiss button
    const dismissButton = fixture.nativeElement.querySelector('button[aria-label="Dismiss"]');
    expect(dismissButton).toBeTruthy();

    // Click dismiss button
    dismissButton.click();

    fixture.detectChanges();

    // Check that toast is removed
    const toastContainer = fixture.nativeElement.querySelector('.pointer-events-auto');
    expect(toastContainer).toBeFalsy();
  });
});