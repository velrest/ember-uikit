/* eslint-env node */
"use strict";

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");
const sass = require("sass");

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: { implementation: sass },
    fingerprint: {
      prepend: "https://adfinis-sygroup.github.io/ember-uikit/"
    },
    snippetPaths: ["tests/dummy/app/snippets"],
    includeHighlightJS: false,
    includeHighlightStyles: false
  });

  app.import("vendor/highlight.pack.js", {
    using: [{ transformation: "amd", as: "highlight.js" }]
  });

  app.import("vendor/atom-one-light.css");

  return app.toTree();
};
