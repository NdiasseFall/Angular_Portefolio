import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [],
  template: `
    <div
      class="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      @for (toast of toastService.toast$(); track toast.id) {
        <div
          class="pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300"
          [class.bg-emerald-50]="toast.type === 'success'"
          [class.dark:bg-emerald-950/90]="toast.type === 'success'"
          [class.border-emerald-200]="toast.type === 'success'"
          [class.dark:border-emerald-800]="toast.type === 'success'"
          [class.text-emerald-900]="toast.type === 'success'"
          [class.dark:text-emerald-100]="toast.type === 'success'"
          [class.bg-red-50]="toast.type === 'error'"
          [class.dark:bg-red-950/90]="toast.type === 'error'"
          [class.border-red-200]="toast.type === 'error'"
          [class.dark:border-red-800]="toast.type === 'error'"
          [class.text-red-900]="toast.type === 'error'"
          [class.dark:text-red-100]="toast.type === 'error'"
          [class.bg-blue-50]="toast.type === 'info'"
          [class.dark:bg-blue-950/90]="toast.type === 'info'"
          [class.border-blue-200]="toast.type === 'info'"
          [class.dark:border-blue-800]="toast.type === 'info'"
          [class.text-blue-900]="toast.type === 'info'"
          [class.dark:text-blue-100]="toast.type === 'info'"
          [class.bg-amber-50]="toast.type === 'warning'"
          [class.dark:bg-amber-950/90]="toast.type === 'warning'"
          [class.border-amber-200]="toast.type === 'warning'"
          [class.dark:border-amber-800]="toast.type === 'warning'"
          [class.text-amber-900]="toast.type === 'warning'"
          [class.dark:text-amber-100]="toast.type === 'warning'"
        >
          <div class="shrink-0 mt-0.5">
            @if (toast.type === 'success') {
              <svg class="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            } @else if (toast.type === 'error') {
              <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            } @else {
              <svg class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          </div>
          <div class="flex-1 text-sm font-medium">
            {{ toast.message }}
          </div>
          <button
            type="button"
            (click)="toastService.removeToast(toast.id)"
            class="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
            aria-label="Fermer la notification"
          >
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      }
    </div>
  `,
})
export class ToastContainerComponent {
  public toastService = inject(ToastService);
}
