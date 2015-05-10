/**
 * If its on server, inserts the dictionary object
 */
if (orion.dictionary.find().count() != 1) {
  orion.dictionary.remove({});
  orion.dictionary.insert({}, function(){
    console.log("Orion dictionary initialized");
  });
}

/**
 * Publications of the dictionary
 */
Meteor.publish(null, function() {
  return orion.dictionary.find();
}, { is_auto: true });
