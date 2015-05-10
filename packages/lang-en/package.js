Package.describe({
  name: 'orionjs:lang-en',
  version: '1.1.0',
  summary: 'Orion - Default english language',
  git: 'https://github.com/orionjs/orion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'msgfmt:core@2.0.0-preview.7'
    ]);

  api.imply(['msgfmt:core']);

  api.addFiles('init.js', ['client', 'server']);
  api.addFiles('lang-en.js', 'server');

  api.export(['msgfmt', 'mfPkg']);
});
