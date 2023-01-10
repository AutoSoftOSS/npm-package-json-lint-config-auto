import { requireRules } from "./require.js";
import { typeRules } from "./type.js";
import { validValueRules } from "./valid-value.js";
import { dependencyRules } from "./dependency.js";
import { scriptsRules } from "./scripts.js";
import { formatRules } from "./format.js";
import { propertyRules } from "./property.js";

export type ProjectType = {
  /**
   * If the project will be published to NPM.
   */
  publish: boolean;
  /**
   * If the project includes a binary.
   */
  bin: boolean;
  /**
   * If the project needs to be built.
   */
  build: boolean;
  /**
   * If the project is the root of a workspace.
   */
  workspace: boolean;
};

export function getConfig(projectType: ProjectType) {
  return {
    rules: {
      ...requireRules(projectType),
      ...typeRules(),
      ...validValueRules(projectType),
      ...dependencyRules(),
      ...scriptsRules(projectType),
      ...formatRules(),
      ...propertyRules()
    }
  };
}

const config = getConfig({
  publish: true,
  bin: false,
  build: true,
  workspace: false
});

module.exports = config;

export default config;
