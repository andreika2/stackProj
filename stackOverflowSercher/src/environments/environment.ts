// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};

const APPLICATION_URL = 'https://api.stackexchange.com/2.3/';

const APPLICATION_KEY = 'U4DMV*8nvpm3EOpvf69Rxw((';

const APPLICATION_SITE_NAME = "stackoverflow";

export {
  APPLICATION_URL,
  APPLICATION_KEY,
  APPLICATION_SITE_NAME,
  environment
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
