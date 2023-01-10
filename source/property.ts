
/**
 * https://npmpackagejsonlint.org/docs/rules#packagejson-property-rules
 */
export function propertyRules() {
  return {
    "prefer-property-order": ["error", [
      // Package Info
      "name",
      "version",
      "description",
      "license",
      "private",
      // People
      "author",
      "contributors",
      // Links
      "homepage",
      "repository",
      "bugs",
      // Keywords
      "keywords",
      // Files
      "type",
      "main",
      "exports",
      "module",
      "types",
      "typings",
      "bin",
      "files",
      // Requirements
      "os",
      "engines",
      // Scripts
      "scripts",
      // Dependencies
      "bundleDependencies",
      "bundledDependencies",
      "dependencies",
      "peerDependencies",
      "devDependencies",
      // Config
      "eslintConfig",
      "husky",
      "jest",
      "npmpackagejsonlint",
      // Workspaces
      "packageManager",
      "workspaces",
      // Publishing
      "publishConfig"
    ]],
    "no-duplicate-properties": "error",
    "prefer-no-contributors": "off",
    "prefer-no-dependencies": "off",
    "prefer-no-devDependencies": "off",
    "prefer-no-engineStrict": "off",
    "prefer-no-optionalDependencies": "error",
    "prefer-no-peerDependencies": "off"
  };
}
