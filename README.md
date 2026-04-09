# Styling Tools

## Description
This plugin intends to unify styling for all squadus infrastructure. It contains ESLint and Prettier presets.

## How to use
For rules needs to import rules folder.
```javascript
// .eslintrc.js
module.exports = {
    ...
    extends: ['@squadus/eslint-config'],
    ...
};
```
To extend rules simply add `rules` block after `extends`

Prettier can be imported to package.json
```javascript
{
  "name": "your-package",
  "prettier": "@squadus/eslint-config/.prettierrc.json",
  ...
}
```
