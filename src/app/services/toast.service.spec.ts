import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with empty toasts array', () => {
    expect(service.toast$()).toEqual([]);
  });

  it('should add success toast when showSuccess is called', () => {
    const testMessage = 'Test success message';
    service.showSuccess(testMessage);

    const toasts = service.toast$();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('success');
    expect(toasts[0].message).toBe(testMessage);
  });

  it('should add error toast when showError is called', () => {
    const testMessage = 'Test error message';
    service.showError(testMessage);

    const toasts = service.toast$();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('error');
    expect(toasts[0].message).toBe(testMessage);
  });

  it('should add info toast when showInfo is called', () => {
    const testMessage = 'Test info message';
    service.showInfo(testMessage);

    const toasts = service.toast$();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('info');
    expect(toasts[0].message).toBe(testMessage);
  });

  it('should add warning toast when showWarning is called', () => {
    const testMessage = 'Test warning message';
    service.showWarning(testMessage);

    const toasts = service.toast$();
    expect(toasts.length).toBe(1);
    expect(toasts[0].type).toBe('warning');
    expect(toasts[0].message).toBe(testMessage);
  });

  it('should remove toast when removeToast is called', () => {
    service.showSuccess('Test message');
    const toasts = service.toast$();
    expect(toasts.length).toBe(1);
    const toastId = toasts[0].id;

    service.removeToast(toastId);
    expect(service.toast$().length).toBe(0);
  });

  it('should clear all toasts when clear is called', () => {
    service.showSuccess('Test message 1');
    service.showError('Test message 2');
    expect(service.toast$().length).toBe(2);

    service.clear();
    expect(service.toast$().length).toBe(0);
  });
});