Package.describe({
  name: 'orionjs:relationships',
  summary: 'Define and use relationships between meteor collections, entities and the dictionary',
  version: '1.4.1',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:base@1.4.2',
    'orionjs:attributes@1.4.1',
    'less',
    'jeremy:selectize@0.12.1_3'
    ]);

  api.imply([
    'jeremy:selectize',
    ]);

  api.addFiles([
    'attribute.js',
    'users.js',
    ]);

  api.addFiles([
    'relationships.html',
    'relationships.js',
    'relationships.less',
    ], 'client');
});
