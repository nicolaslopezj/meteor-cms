Package.describe({
  name: 'orionjs:core',
  summary: 'A framework that makes complex as well as simple apps possible with minimal effort',
  version: '1.8.0',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'npm-bcrypt@0.9.2',
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'orionjs:base@1.8.0',
    'orionjs:accounts@1.8.0',
    'orionjs:config@1.8.0',
    'orionjs:collections@1.8.0',
    'orionjs:dictionary@1.8.0',
    'orionjs:attributes@1.8.0',
    'orionjs:lang-en@1.8.0'
    ]);

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
