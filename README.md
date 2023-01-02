<div align="center">
  <h1>npm-package-json-lint-config-auto</h1>
  <a href="https://npmjs.com/package/npm-package-json-lint-config-auto">
    <img alt="npm" src="https://img.shields.io/npm/v/npm-package-json-lint-config-auto.svg">
  </a>
  <a href="https://github.com/autosoftoss/npm-package-json-lint-config-auto">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/autosoftoss/npm-package-json-lint-config-auto.svg">
  </a>
</div>

<br />

<blockquote align="center">NPM Package.json Lint Config</blockquote>

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/autosoftoss/npm-package-json-lint-config-auto">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/autosoftoss/npm-package-json-lint-config-auto?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---

This package provides a base config for [npm-package-json-lint](https://www.npmjs.com/package/npm-package-json-lint).

## Installation

```sh
yarn add --dev npm-package-json-lint-config-auto
```

```sh
npm install --save-dev npm-package-json-lint-config-auto
```

```sh
pnpm add --save-dev npm-package-json-lint-config-auto
```

## Usage

In your `package.json` file:

```json
{
  "npmpackagejsonlint": {
    "extends": "npm-package-json-lint-config-auto"
  }
}
```

### NPM Package JSON Lint

Now to run `npm-package-json-lint`, run `yarn npmPkgJsonLint .` or `npm run npmPkgJsonLint .`.

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/npm-package-json-lint-config-auto?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/npm-package-json-lint-config-auto.svg"></a></h2>

- [npm-package-json-lint](https://www.npmjs.com/package/npm-package-json-lint): Configurable linter for package.json files.

<h3 id="dev-dependencies">Dev Dependencies</h3>

- [@autosoft/tsconfig](https://www.npmjs.com/package/@autosoft/tsconfig): A base for TypeScript projects.

<br />


<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/npm-package-json-lint-config-auto.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
