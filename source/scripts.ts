import { ProjectType } from ".";

export function scriptsRules({ build, publish }: ProjectType) {
  const scripts = [
    "lint",
    "test",
    ...(build ? ["build"] : []),
    ...(publish ? ["release"] : []),
    ...(build && publish ? ["prepack"] : [])
  ];
  return {
    "prefer-alphabetical-scripts": "error",
    "prefer-scripts": ["warning", scripts]
  };
}
