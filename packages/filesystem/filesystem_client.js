/**
 * Public upload function
 *
 * This function handles all uploads in orion,
 * it also register the file so we can view it
 * in the admin panel.
 */
orion.filesystem.upload = function(options) {
  check(options, {
    name: String,
    fileList: Match.Any,
    uploader: String,
    meta: Match.Optional(Object)
  });

  var upload = {};

  upload._statusDependency = new Tracker.Dependency();
  upload._ready = false;
  upload.error = null;
  upload.url = null;
  upload.meta = null;

  upload._progressDependency = new Tracker.Dependency();
  upload._progress = 0;

  upload.ready = function() {
    upload._statusDependency.depend();
    return upload._ready;
  };

  upload.progress = function() {
    upload._progressDependency.depend();
    return upload._progress;
  };

  orion.filesystem.providerUpload(options, function(url, meta) {
    upload.url = url;
    upload.meta = meta;
    upload._ready = true;
    upload.fileId = orion.filesystem.collection.insert({ url: url, meta: meta, name: options.name, uploader: options.uploader });
    upload._statusDependency.changed();
  }, function(error) {
    check(error, Meteor.Error);
    upload.error = error;
    upload._ready = true;
    upload._statusDependency.changed();
  }, function(progress) {
    check(progress, Number);
    upload._progress = progress;
    upload._progressDependency.changed();
  });

  return upload;
};

/**
 * Public remove function
 *
 * This function handles all removes in orion,
 * it also removes the file in the admin panel.
 */
orion.filesystem.remove = function(fileId) {
  check(fileId, String);

  var remove = {};

  remove._statusDependency = new Tracker.Dependency();
  remove._ready = false;
  remove.error = null;
  remove.subscription = Meteor.subscribe('filesystem_file_toEarse', fileId);

  remove.ready = function() {
    remove._statusDependency.depend();
    return remove._ready;
  };

  Tracker.autorun(function () {
    if (remove.subscription.ready()) {
      var file = orion.filesystem.collection.findOne(fileId);
      if (!file) {
        remove._ready = true;
        remove.error = new Meteor.Error(
          'file-not-found',
          mf('file_id_not_found', { fileId: fileId })
        );
        remove._statusDependency.changed();
      } else {
        orion.filesystem.providerRemove(file, function() {
          remove._ready = true;
          orion.filesystem.collection.remove(fileId);
          remove._statusDependency.changed();
        }, function(error) {
          check(error, Meteor.Error);
          remove._ready = true;
          remove.error = error;
          orion.filesystem.collection.remove(fileId);
          remove._statusDependency.changed();
        });
      }
    }
  });
};

/**
 * Provider upload function
 *
 * Please replace this function with the
 * provider you prefer.
 *
 * If success, call success(publicUrl);
 * you can pass data and it will be saved in file.meta
 * Ej: success(publicUrl, {local_path: '/user/path/to/file'})
 *
 * If it fails, call failure(error).
 *
 * When the progress change, call progress(newProgress)
 */
orion.filesystem.providerUpload = function(options, success, failure, progress) {
  throw 'Please define a upload function';
};

/**
 * Provider remove function
 *
 * Please replace this function with the
 * provider you prefer.
 *
 * If success, call success();
 * If it fails, call failure(error).
 */
orion.filesystem.providerRemove = function(file, success, failure) {
  throw 'Please define a remove function';
};
