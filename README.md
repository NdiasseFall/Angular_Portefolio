# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Static assets (`public/`)

Every file in `public/` is copied as-is to the root of the build output:

- `public/CV_Ndiasse_Fall.pdf` — the CV downloaded from the Hero section. **Replace it with the final designed CV**: the committed file is generated from the portfolio data so the link never returns a 404.
- `public/images/` — technology logos, project screenshots and the PWA icons (`icon-192.png`, `icon-512.png`, both square PNGs).
- `public/manifest.json` — PWA manifest (name, theme colors, icons).

## Progressive Web App

The Angular service worker is generated at build time from `src/ngsw-config.json`
(exposed through the `serviceWorker` build option of `angular.json`) and is only
registered in production, because `provideServiceWorker()` reads
`environment.production`, which the `production` configuration flips through
`fileReplacements`.

To verify the PWA locally, serve a production build: `ng serve` uses the
development configuration and therefore never registers the worker.

```bash
ng build
npx http-server dist/portfolio/browser -p 8080
```

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

Tests run in a jsdom environment. `src/test-setup.ts` is registered through the
`setupFiles` option of the `test` target in `angular.json` and polyfills the jsdom
APIs the application relies on (currently `window.matchMedia`, used by
`ThemeService`).

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
