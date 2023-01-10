import { ProjectType } from ".";

/**
 * https://npmpackagejsonlint.org/docs/rules#valid-value-rules
 */
export function validValueRules({ publish }: ProjectType) {
  return {
    "valid-values-author": "off",
    "valid-values-engines": "off",
    "valid-values-license": "off",
    "valid-values-name-scope": "off",
    "valid-values-private": ["error", publish ? [false] : [true]],
    "valid-values-publishConfig": "off"
  };
}
