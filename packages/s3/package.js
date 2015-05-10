Package.describe({
  name: 'orionjs:s3',
  summary: 'S3 storage for orion:filesystem',
  version: '1.1.0',
  git: 'https://github.com/orionjs/s3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:core@1.0.0',
    'orionjs:filesystem@1.1.0',
    'orionjs:config@1.1.0',
    'lepozepo:s3@5.1.1',
    'msgfmt:core@2.0.0-preview.7'
    ]);

  api.addFiles([
    's3.js',
    ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:filesystem');
});
