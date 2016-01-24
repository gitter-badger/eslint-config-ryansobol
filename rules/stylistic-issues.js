'use strict';

// see http://eslint.org/docs/rules/#stylistic-issues
module.exports = {
  // Enforce spacing inside array brackets
  'array-bracket-spacing': [2, 'never'],

  // Disallow or enforce spaces inside of single line blocks
  'block-spacing': [2, 'always'],

  // Enforce one true brace style
  'brace-style': [2, 'stroustrup', {allowSingleLine: true}],

  // Require camel case names
  'camelcase': [2, {properties: 'always'}],

  // Enforce spacing before and after comma
  'comma-spacing': [2, {before: false, after: true}],

  // Enforce one true comma style
  'comma-style': [2, 'last'],

  // Require or disallow padding inside computed properties
  'computed-property-spacing': [2, 'never'],

  // Enforces consistent naming when capturing the current execution context
  'consistent-this': [2, 'self'],

  // Enforce newline at the end of file, with no multiple empty lines
  'eol-last': 2,

  // Don't require function expressions to have a name
  'func-names': 0,

  // Enforces use of function declarations or expressions
  'func-style': [2, 'expression'],

  // This option enforces minimum and maximum identifier lengths (variable
  // names, property names etc.)
  'id-length': [2, {
    min: 2,
    properties: 'always',
    exceptions: ['x', 'y', 'z', 'e', 'i', 'j', 'k', 'v', '_']
  }],

  // Require identifiers to match the provided regular expression
  'id-match': 0,

  // This option sets a specific tab width for your code
  'indent': [2, 2, {'SwitchCase': 1}],

  // Specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': [2, 'prefer-double'],

  // Enforces spacing between keys and values in object literal properties
  'key-spacing': [2, {beforeColon: false, afterColon: true}],

  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  'linebreak-style': [2, 'unix'],

  // Enforces empty lines around comments
  'lines-around-comment': [2, {
    'allowArrayStart': true,
    'allowBlockStart': true,
    'allowObjectStart': true,
    'beforeBlockComment': true,
    'beforeLineComment': true
  }],

  // Specify the maximum depth that blocks can be nested
  'max-depth': [2, 4],

  // Specify the maximum length of a line in your program
  'max-len': [2, 80, 4, {'ignoreUrls': true}],

  // Specify the maximum depth callbacks can be nested
  'max-nested-callbacks': [2, 4],

  // Limits the number of parameters that can be used in the function
  // declaration.
  'max-params': [2, 3],

  // Specify the maximum number of statement allowed in a function
  'max-statements': [2, 15],

  // Require a capital letter for constructors
  'new-cap': 2,

  // Disallow the omission of parentheses when invoking a constructor with no
  // arguments
  'new-parens': 2,

  // Allow/disallow an empty newline after var statement
  'newline-after-var': 0,

  // Disallow use of the Array constructor
  'no-array-constructor': 2,

  // Disallow use of the continue statement
  'no-continue': 0,

  // Disallow comments inline after code
  'no-inline-comments': 0,

  // Disallow if as the only statement in an else block
  'no-lonely-if': 1,

  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 1,

  // Disallow multiple empty lines
  'no-multiple-empty-lines': 1,

  // Disallow nested ternary expressions
  'no-nested-ternary': 1,

  // Disallow use of the Object constructor
  'no-new-object': 1,

  // Disallow space between function identifier and application
  'no-spaced-func': 1,

  // Disallow the use of ternary operators
  'no-ternary': 0,

  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 1,

  // Allow dangling underscores in identifiers
  'no-underscore-dangle': 0,

  // Disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': 1,

  // Require or disallow padding inside curly braces
  'object-curly-spacing': [1, 'never'],

  // Allow or disallow one variable declaration per function
  'one-var': [1, 'never'],

  // Require assignment operator shorthand where possible or prohibit it
  // entirely
  'operator-assignment': [1, 'always'],

  // Enforce operators to be placed before or after line breaks
  'operator-linebreak': [1, 'after', {
    overrides: {'?': 'before', ':': 'before'}
  }],

  // Enforce padding within blocks
  'padded-blocks': 0,

  // Require quotes around object literal property names
  'quote-props': [1, 'as-needed'],

  // Specify whether backticks, double or single quotes should be used
  'quotes': [1, 'single', 'avoid-escape'],

  // Enforce spacing before and after semicolons
  'semi-spacing': [1, {before: false, after: true}],

  // Require or disallow use of semicolons instead of ASI
  'semi': [1, 'always'],

  // Sort variables within the same declaration block
  'sort-vars': 0,

  // Require a space after certain keywords
  'space-after-keywords': [1, 'always'],

  // Require or disallow space before blocks
  'space-before-blocks': [1, 'always'],

  // Require or disallow space before function opening parenthesis
  'space-before-function-paren': [1, 'never'],

  // Require or disallow spaces inside parentheses
  'space-in-parens': [1, 'never'],

  // Require spaces around operators
  'space-infix-ops': 1,

  // Require a space after return, throw, and case
  'space-return-throw-case': 1,

  // Require or disallow spaces before/after unary operators (words on by
  // default, nonwords)
  'space-unary-ops': [1, {words: true, nonwords: false}],

  // Require or disallow a space immediately following the // or /* in a comment
  'spaced-comment': [1, 'always'],

  // Require regex literals to be wrapped in parentheses
  'wrap-regex': 0
};
