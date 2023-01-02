
const config = {
  rules: {
    "require-name": "error",
    "require-version": "error",
    "require-description": "error",
    "require-main": "error",
    "require-author": "error",
    "require-license": "error",
    "require-repository": "error",
    "require-keywords": "warning",
    "require-files": "error",
    "require-scripts": "warning",
    "bin-type": "warning",
    "bundledDependencies-type": "warning",
    "config-type": "warning",
    "cpu-type": "warning",
    "dependencies-type": "warning",
    "description-type": "warning",
    "devDependencies-type": "warning",
    "directories-type": "warning",
    "engines-type": "warning",
    "files-type": "warning",
    "homepage-type": "warning",
    "keywords-type": "warning",
    "license-type": "warning",
    "main-type": "warning",
    "man-type": "warning",
    "name-type": "warning",
    "optionalDependencies-type": "warning",
    "os-type": "warning",
    "peerDependencies-type": "warning",
    "preferGlobal-type": "warning",
    "private-type": "warning",
    "repository-type": "warning",
    "scripts-type": "warning",
    "version-type": "warning",
    "no-archive-dependencies": "warning",
    "no-file-dependencies": "warning",
    "no-git-dependencies": "warning",
    "prefer-alphabetical-dependencies": "error",
    "no-archive-devDependencies": "warning",
    "no-file-devDependencies": "warning",
    "no-git-devDependencies": "warning",
    "prefer-alphabetical-devDependencies": "error",
    "prefer-alphabetical-bundledDependencies": "error",
    "prefer-alphabetical-optionalDependencies": "error",
    "prefer-alphabetical-peerDependencies": "error",
    "prefer-alphabetical-scripts": "error",
    "prefer-scripts": ["warning", [
      "build",
      "dev",
      "lint",
      "test"
    ]],
    "description-format": ["warning", {
      requireCapitalFirstLetter: true
    }],
    "name-format": "error",
    "version-format": "error",
    "prefer-property-order": ["error", [
      "name",
      "version",
      "description",
      "main",
      "author",
      "license",
      "private",
      "type",
      "homepage",
      "repository",
      "contributors",
      "keywords",
      "exports",
      "types",
      "bin",
      "files",
      "engines",
      "scripts",
      "dependencies",
      "peerDependencies",
      "devDependencies",
      "eslintConfig",
      "husky",
      "jest",
      "npmpackagejsonlint",
      "workspaces",
      "publishConfig"
    ]],
    "no-duplicate-properties": "error",
    "prefer-no-optionalDependencies": "error"
  }
};

module.exports = config;

export default config;
