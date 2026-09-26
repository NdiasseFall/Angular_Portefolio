/**
 * Global test setup (registered through the `setupFiles` option of the
 * `@angular/build:unit-test` builder in `angular.json`).
 *
 * jsdom does not implement `window.matchMedia`, which `ThemeService` relies on
 * to detect the user's system color-scheme preference. Without this polyfill,
 * every test that instantiates `ThemeService` (directly or through a component)
 * fails with `TypeError: window.matchMedia is not a function`.
 */

type MediaQueryListener = (event: MediaQueryListEvent) => void;

const listeners = new Set<MediaQueryListener>();

function createMediaQueryList(query: string): MediaQueryList {
  return {
    media: query,
    matches: false,
    onchange: null,
    addEventListener: (_type: string, listener: MediaQueryListener) => {
      listeners.add(listener);
    },
    removeEventListener: (_type: string, listener: MediaQueryListener) => {
      listeners.delete(listener);
    },
    addListener: (listener: MediaQueryListener) => {
      listeners.add(listener);
    },
    removeListener: (listener: MediaQueryListener) => {
      listeners.delete(listener);
    },
    dispatchEvent: () => true,
  } as unknown as MediaQueryList;
}

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: createMediaQueryList,
  });
}
