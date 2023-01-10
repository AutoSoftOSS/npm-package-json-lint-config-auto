
const dependencies = {
  "no-absolute-version-dependencies": "off",
  "no-archive-dependencies": "warning",
  "no-caret-version-dependencies": "off",
  "no-file-dependencies": "warning",
  "no-git-dependencies": "warning",
  "no-restricted-dependencies": "off",
  "no-restricted-pre-release-dependencies": "off",
  "no-tilde-version-dependencies": "off",
  "prefer-absolute-version-dependencies": "off",
  "prefer-alphabetical-dependencies": "error",
  "prefer-caret-version-dependencies": "off",
  "prefer-no-version-zero-dependencies": "off",
  "prefer-tilde-version-dependencies": "off"
};

const devDependencies = {
  "no-absolute-version-devDependencies": "off",
  "no-archive-devDependencies": "warning",
  "no-caret-version-devDependencies": "off",
  "no-file-devDependencies": "warning",
  "no-git-devDependencies": "warning",
  "no-restricted-devDependencies": "off",
  "no-restricted-pre-release-devDependencies": "off",
  "no-tilde-version-devDependencies": "off",
  "prefer-absolute-version-devDependencies": "off",
  "prefer-alphabetical-devDependencies": "off",
  "prefer-caret-version-devDependencies": "off",
  "prefer-no-version-zero-devDependencies": "off",
  "prefer-tilde-version-devDependencies": "off"
};

const bundledDependencies = {
  "prefer-alphabetical-bundledDependencies": "error"
};

const optionalDependencies = {
  "prefer-alphabetical-optionalDependencies": "error"
};

const peerDependencies = {
  "prefer-alphabetical-peerDependencies": "error"
};

/**
 * https://npmpackagejsonlint.org/docs/rules#type-rules
 */
export function dependencyRules() {
  return  {
    ...dependencies,
    ...devDependencies,
    ...bundledDependencies,
    ...optionalDependencies,
    ...peerDependencies
  };
}
