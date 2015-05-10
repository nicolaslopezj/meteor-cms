Meteor.publish('invitation', function (invitationId) {
  check(invitationId, String);
  return orion.accounts.invitations.find(invitationId);
});

Meteor.methods({
  createInvitation: function (options) {
    check(options, {
      roles: Array,
      email: Match.Optional(String),
    });
    var invitationId = orion.accounts.invitations.insert(options);

    if (Options.get('sendAccountInvitationToEmail') && Options.get('accountInvitationEmailTemplate')) {
      // Send by email
    }

    return invitationId;
  },
  registerWithInvitation: function(options) {
    check(options, {
      email: String,
      password: String,
      name: String,
      invitationId: String
    });

    var invitation = orion.accounts.invitations.findOne(options.invitationId);

    if (!options.invitationId) {
      throw new Meteor.Error('invalid-invitation', mf('invalid_invitation_code'));
    }

    if (invitation.email && invitation.email != options.email) {
      throw new Meteor.Error('invalid-email', mf('invalid_email'));
    }

    var userId = Accounts.createUser({ email: options.email, password: options.password });
    Meteor.users.update(userId, { $set: { profile: { name: options.name } } });
    Roles.setUserRoles(userId, invitation.roles);

    orion.accounts.invitations.remove(options.invitationId);

    return userId;
  },
});
