
Package.describe({
  name    : 'semantic:ui-button',
  summary : 'Semantic UI - Button: Single component release',
  version : '2.2.6',
  git     : 'git://github.com/Semantic-Org/UI-Button.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'button.css'
  ], 'client');
});


Package.describe({
  name    : 'semantic:ui-input',
  summary : 'Semantic UI - Input: Single component release',
  version : '2.2.6',
  git     : 'git://github.com/Semantic-Org/UI-Input.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'input.css'
  ], 'client');
});
