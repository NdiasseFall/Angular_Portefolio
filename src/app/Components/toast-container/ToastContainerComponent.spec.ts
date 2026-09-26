import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastContainerComponent } from './toast-container.component';
import { ToastService } from '../../services/toast.service';

describe('ToastContainerComponent', () => {
  let component: ToastContainerComponent;
  let fixture: ComponentFixture<ToastContainerComponent>;
  let toastService: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastContainerComponent],
      providers: [ToastService],
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
    toastService.showSuccess('Test message');
    fixture.detectChanges();

    const toastContainer = fixture.nativeElement.querySelector('.pointer-events-auto');
    expect(toastContainer).toBeTruthy();

    const toastMessage = fixture.nativeElement.querySelector('.text-sm');
    expect(toastMessage).toBeTruthy();
    expect(toastMessage.textContent).toContain('Test message');
  });

  it('should not render anything when no toasts', () => {
    fixture.detectChanges();

    const toastElements = fixture.nativeElement.querySelectorAll('.pointer-events-auto');
    expect(toastElements.length).toBe(0);
  });

  it('should remove toast when dismiss button is clicked', () => {
    toastService.showSuccess('Test message');
    fixture.detectChanges();

    const dismissButton = fixture.nativeElement.querySelector('button[aria-label="Fermer la notification"]');
    expect(dismissButton).toBeTruthy();

    dismissButton.click();
    fixture.detectChanges();

    const toastContainer = fixture.nativeElement.querySelector('.pointer-events-auto');
    expect(toastContainer).toBeFalsy();
  });
});