'use strict'

// Put this file to the directory where your browser code is located. This could be the root
// directory, or a subdirectory if your project consists of both node.js and browser code.
module.exports = {
  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/coding-styles/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['app'],
      },
    },
  },
  parser: 'babel-eslint',
}
