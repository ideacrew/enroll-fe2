module.exports = {
  '{apps,libs,tools}/**/*.ts': [
    (files) => `nx affected --target=typecheck --files=${files.join(',')}`,
  ],

  '{apps,libs,tools}/**/*.spec.ts': [
    (files) => `nx affected:test --files=${files.join(',')}`,
  ],

  '{apps,libs,tools}/**/*.{js,ts,json}': [
    (files) => `nx affected:lint --fix --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],

  '{apps,libs,tools}/**/*.{css,scss}': [
    (files) =>
      `nx affected --target=stylelint --fix --files=${files.join(',')}`,
  ],
};
