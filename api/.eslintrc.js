module.exports = {
  "env": {
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true
  },
  "extends": "airbnb-base",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018
  },
  "rules": {
    "import/no-dynamic-require": 0,
    "class-methods-use-this": 0,
    "no-path-concat": 0,
    "func-names": 0,
  }
};
