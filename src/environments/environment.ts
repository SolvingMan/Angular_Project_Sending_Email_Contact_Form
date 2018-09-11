// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  googleMapsApiKey: 'AIzaSyCqhadmQ75-upzI4bb8CymHWgPPcEY80yE',
  firebase: {
    apiKey: 'AIzaSyD8NCLuggIVjbXq42bWi9TnLcd2m0J3sFo',
    authDomain: 'homekitts.firebaseapp.com',
    databaseURL: 'https://homekitts.firebaseio.com',
    projectId: 'homekitts',
    storageBucket: 'homekitts.appspot.com',
    messagingSenderId: '521777076630'
  },
  localStorage: {
    prefix: 'EM_APP',
    userInfo: 'USER_INFO'
  }
};
