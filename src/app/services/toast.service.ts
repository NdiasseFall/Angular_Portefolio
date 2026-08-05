import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts = signal<Toast[]>([]);
  private toastId = 0;

  readonly toast$ = this.toasts.asReadonly();

  showSuccess(message: string, duration = 5000) {
    this.addToast('success', message, duration);
  }

  showError(message: string, duration = 5000) {
    this.addToast('error', message, duration);
  }

  showInfo(message: string, duration = 5000) {
    this.addToast('info', message, duration);
  }

  showWarning(message: string, duration = 5000) {
    this.addToast('warning', message, duration);
  }

  private addToast(type: Toast['type'], message: string, duration: number) {
    const id = this.toastId++;
    const toast: Toast = { id: id.toString(), type, message, duration };

    this.toasts.update(toasts => [...toasts, toast]);

    // Auto remove after duration
    setTimeout(() => {
      this.removeToast(id.toString());
    }, duration);
  }

  removeToast(id: string | number) {
    this.toasts.update(toasts =>
      toasts.filter(toast => toast.id !== id)
    );
  }

  clear() {
    this.toasts.set([]);
  }
}