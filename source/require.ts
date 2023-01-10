import { ProjectType } from ".";
/**
 * https://npmpackagejsonlint.org/docs/rules#require-node-rules
 *
 * If autorepo will fill the field and the field is only nice to have, it should be a warning.
 */
export function requireRules({ publish, bin, build, workspace }: ProjectType) {
  return {
    "require-author": publish ? "error": "off",
    "require-bin": "off",
    "require-bugs": publish ? "error": "off",
    "require-bundledDependencies": "off",
    "require-config": "off",
    "require-contributors": publish ? "error": "off",
    "require-cpu": "off",
    "require-dependencies": "off",
    "require-description": publish ? "error": "off",
    "require-devDependencies": "off",
    "require-directories": "off",
    "require-engines": "off",
    "require-files": publish ? "error": "off",
    "require-funding": "off",
    "require-homepage": publish ? "error": "off",
    "require-keywords": publish ? "error": "off",
    "require-license": publish ? "error": "off",
    "require-main": publish ? "error": "off",
    "require-man": "off",
    "require-module": "off", // Use "exports" instead.
    "require-name": "error",
    "require-optionalDependencies": "off",
    "require-os": "off",
    "require-peerDependencies": "off",
    "require-preferGlobal": "off",
    "require-private": publish === false ? "error" : "warning",
    "require-publishConfig": "off",
    "require-repository-directory": "off",
    "require-repository": publish ? "error": "off",
    "require-scripts": publish ? "error": "off",
    "require-types": publish && build ? "error": "off",
    "require-typings": "off", // Use "types" instead.
    "require-version": workspace ? "off" : "error"
  };
};
