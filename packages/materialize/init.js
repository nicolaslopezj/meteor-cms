Options.init('homePath');
Options.init('siteName');
Options.init('materialize.headerColor');

ReactiveTemplates.request('tabs', 'orionMaterializeTabs');

ReactiveTemplates.set('layout', 'orionMaterializeLayout');
ReactiveTemplates.set('outAdminLayout', 'orionMaterializeOutAdminLayout');

ReactiveTemplates.set('login', 'orionMaterializeLogin');
ReactiveTemplates.set('registerWithInvitation', 'orionMaterializeRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'orionMaterializeAccountIndex');
ReactiveTemplates.set('myAccount.password', 'orionMaterializeAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'orionMaterializeAccountProfile');

ReactiveTemplates.set('accounts.index', 'orionMaterializeAccountsIndex');
ReactiveTemplates.set('accounts.update', 'orionMaterializeAccountsUpdate');
ReactiveTemplates.set('accounts.create', 'orionMaterializeAccountsCreate');

ReactiveTemplates.set('configUpdate', 'orionMaterializeConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'orionMaterializeDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'orionMaterializeCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'orionMaterializeCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'orionMaterializeCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'orionMaterializeCollectionsDelete');

// Orion attributes replace
ReactiveTemplates.set('attribute.file', 'orionMaterializeFileAttribute');
ReactiveTemplates.set('attribute.hasOne', 'orionMaterializeHasOneAttribute');
ReactiveTemplates.set('attribute.hasMany', 'orionMaterializeHasManyAttribute');
ReactiveTemplates.set('attribute.user', 'orionMaterializeHasOneAttribute');
ReactiveTemplates.set('attribute.users', 'orionMaterializeHasManyAttribute');

if (Meteor.isClient) {
  AutoForm.setDefaultTemplate('materialize');
}

// Pages
ReactiveTemplates.set('pages.index', 'orionMaterializePagesIndex');
ReactiveTemplates.set('pages.create', 'orionMaterializePagesCreate');
ReactiveTemplates.set('pages.update', 'orionMaterializePagesUpdate');
ReactiveTemplates.set('pages.delete', 'orionMaterializePagesDelete');
