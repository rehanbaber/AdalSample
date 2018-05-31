// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'visionetsys.onmicrosoft.com',
    clientId: '917b6306-995b-467d-b7c8-d856f3c43287',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    resourceId: 'https://visionet.com/59ce3c03-1116-4186-9404-1e70c5f0379b',
    endpoints: {
      'http://localhost:4200': 'https://localhost:44389/'
    },
  },
  apiUrl: 'http://acquityspark.azurewebsites.net/api/'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
