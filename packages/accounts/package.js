Package.describe({
  name: 'orionjs:accounts',
  summary: 'Orion accounts mannager',
  version: '1.4.3',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base@1.4.2',
    'orionjs:attributes@1.4.1',
    'accounts-base',
    'accounts-password',
    'useraccounts:core@1.12.0',
    'aldeed:simple-schema@1.3.3',
    'matb33:collection-hooks@0.7.13',
    'meteorhacks:inject-initial@1.0.2',
    ]);

  api.use(['aldeed:tabular@1.2.0', 'nicolaslopezj:tabular-materialize@1.2.1'], {
  		weak: true
  	});

  api.imply([
    'underscore',
    'accounts-base',
    'accounts-password',
    'useraccounts:core',
    'matb33:collection-hooks'
    ]);

  api.addFiles([
    'tabular.js',
    'accounts.js',
    'authentication/login.js',
    'authentication/secure-routes.js',
    'my-account/admin.js',
    'accounts-tab/accounts.js',
    'accounts-tab/admin.js',
    'create/invite.js',
    'create/admin.js'
    ]);

  api.addFiles([
    'accounts_server.js',
    'accounts-tab/server.js',
    'create/server.js'
    ], 'server');

  api.addFiles([
    'accounts_client.js',
    'accounts-tab/client.js'
    ], 'client');

  api.export(['orion']);
});

Package.onTest(function(api) {
  api.use('tinytest');
});
