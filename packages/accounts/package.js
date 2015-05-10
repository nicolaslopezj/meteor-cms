Package.describe({
  name: 'orionjs:accounts',
  summary: 'Orion accounts mannager',
  version: '1.1.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base@1.0.0',
    'orionjs:attributes@1.0.0',
    'accounts-base',
    'accounts-password',
    'useraccounts:core@1.8.1',
    'aldeed:simple-schema@1.3.2',
    'matb33:collection-hooks@0.7.11',
    'meteorhacks:inject-initial@1.0.2',
    'msgfmt:core@2.0.0-preview.7'
    ]);

  api.imply([
    'underscore',
    'accounts-base',
    'accounts-password',
    'useraccounts:core',
    'matb33:collection-hooks'
    ]);

  api.addFiles([
    'accounts.js',
    'authentication/login.js',
    'authentication/secure-routes.js',
    'my-account/admin.js',
    'accounts-tab/accounts.js',
    'accounts-tab/admin.js',
    'invitations/invitations.js',
    'invitations/admin.js'
    ]);

  api.addFiles([
    'accounts_server.js',
    'accounts-tab/server.js',
    'invitations/server.js'
    ], 'server');

  api.addFiles([
    'accounts_client.js',
    'accounts-tab/client.js'
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
