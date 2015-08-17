Package.describe({
  name: 'orionjs:collections',
  summary: 'Meteor collection with some magic',
  version: '1.4.2',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base@1.4.2',
    'underscore',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    'dburles:collection-helpers@1.0.3',
    ]);

  api.imply([
    'aldeed:simple-schema',
    'aldeed:collection2',
    'dburles:collection-helpers'
    ]);

  api.addFiles([
    'init.js',
    'new.js',
    'permissions.js',
    'admin.js',
    ]);

  api.addFiles([
    'publications.js',
    ], 'server');

  api.addFiles([
    'collections_client.js'
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
