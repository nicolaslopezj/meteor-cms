Meteor.publish('adminAccountsList', function () {
  if (!Roles.userHasPermission(this.userId, 'accounts.index')) {
    return [];
  }
  return [
    Meteor.users.find({}, { fields: { services: 0 } }),
    Roles._collection.find()
  ];
});

Meteor.publish('adminAccountsUpdateRoles', function (userId) {
  check(userId, String);
  if (!Roles.userHasPermission(this.userId, 'accounts.update.roles')) {
    return [];
  }
  return [
    Meteor.users.find(userId, { fields: { services: 0 } }),
    Roles._collection.find({ userId: userId })
  ];
});

Meteor.methods({
  updateRoles: function (userId, roles) {
    check(userId, String);
    check(roles, Array);
    if (!Roles.userHasPermission(this.userId, 'accounts.update.roles')) {
      throw new Meteor.Error('unauthorized', mf('no_permission_for_roles'));
    }
    Roles.setUserRoles(userId, roles);
  }
});
