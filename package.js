Package.describe({
  summary: "Latest version Font-Awesome loaded from local"
});


Package.on_use(function (api, where) {
  api.add_files('lib/font-awesome.min.css', 'client'); // Leave out so you can customize
});