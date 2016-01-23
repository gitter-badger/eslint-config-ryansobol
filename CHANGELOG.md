# Change Log

All changes to this project are documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Changed
- Move the changelog to a dedicated `CHANGLOG.md` file
- Include Ryan Sobol in the `LICENSE` file
- Change `package.json` to `eslint-config-ryansobol`
- Default to ES5 rules

## [5.9.0] - 2016-01-19
### Changed
- Updated `eslint-plugin-react` dependency to 3.15
- Updated `eslint-plugin-shopify` to 2.1
- Set the default `shopify/require-flow` config to `"explicit"`

## [5.8.0] - 2016-01-07
### Added
- Added the newly introduced rules

### Changed
- Updated `eslint-plugin-react` dependency to 3.14

## [5.7.1] - 2015-12-04
### Removed
- Removed `no-arrow-condition` for `ecmascript-6` that conflicted with `arrow-body-style` rule

## [5.7.0] - 2015-12-01
### Added
- Added the new rules introduced by ESLint 1.10

### Changed
- Updated `eslint` dependency to 1.10
- Updated `eslint-plugin-react` dependency to 3.11

## [5.6.1] - 2015-10-20
### Fixed
- Fix non-prefixed React plugin rule

## [5.6.0] - 2015-10-20
### Added
- Add new React plugin rules: `prefer-es6-class`, `no-direct-mutation-state`, and `forbid-prop-types`

## [5.5.0] - 2015-10-20
### Changed
- Converts most rules to being warnings rather than errors. Rules that catch existing bugs or that are considered bad practices are still treated as errors.

## [5.4.0] - 2015-10-06
### Added
- Adds the new rules from `eslint-plugin-shopify`

## [5.3.6] - 2015-09-25
### Added
- Added `eslint-plugin-shopify` to the ES5 config to avoid it dying on those rules

## [5.3.5] - 2015-09-25
### Changed
- Loosens restriction on usage of `this` outside of objects and classes

## [5.3.4] - 2015-09-23
### Added
- Add `_` as an exception to the identifier length rule

## [5.3.3] - 2015-09-22
### Changed
- Demote `console.log` to a warning

## [5.3.2] - 2015-09-22
### Changed
- Allow node things in ES6 config (for Webpack-style imports, like React's images)

## [5.3.1] - 2015-09-21
### Added
- Added a few more exceptions to identifier length rule

### Fixed
- Fix issue where ES6 config was not inheriting from core config

## [5.3.0] - 2015-09-21
### Changed
- Reorganized the project to have a core set of rules that are added to by each config (instead of setting and overriding)
- Allow non-global requires

## [5.2.2] - 2015-09-21
### Fixed
- Fixed some issues with the parsers and plugins specified by the configs

## [5.2.1] - 2015-09-21
### Fixed
- Fixed a dependency issue

## [5.2.0] - 2015-09-21
### Added
- Added the Shopify plugin and initial rule defaults

## [5.1.1] - 2015-09-21
### Fixed
- Fix URLs in `package.json`

## [5.1.0] - 2015-09-21
### Added
- Added an ES5 version of the config
- Added a few minor exceptions to the `id-length` rule

## [5.0.0] - 2015-09-21
### Changed
- Prevent implicit coercions

## [4.0.0] - 2015-09-18
### Changed
- Force `let` in all cases. `const` is allowed but not enforced (use it sparingly to indicate immutable primitives).
- Force function declarations (`function foo() {}`) over function expressions (`var foo = function() {}`)
- Force variable initialization at definition (i.e., no `let foo;`, must be assigned)
- Force parens for arrow function parameters regardless of arity, and force spaces around the actual arrow
- Prefer template strings over concatenation, and spread (`...`) over `.apply()`
- Other minor rule additions and updates

## [3.0.4] - 2015-09-18
### Changed
- Allow function declarations to be used before defined (avoids issues with, for example, functions that call each other recursively)

## [3.0.3] - 2015-09-18
### Changed
- Avoid escape in quote styles

## [3.0.2] - 2015-09-17
### Fixed
- Forgot to bump to package.json version

## [3.0.1] - 2015-09-17
### Changed
- Use jsx-quotes instead of react/jsx-quotes

## [3.0.0] - 2015-09-17
### Changed
- Enforce trailing commas on multiline literals
- Enforce double quotes for JSX to be in line with XML
- Don't allow spacing inside object literals

## [2.0.1] - 2015-09-15
### Changed
- Minor project cleanup

### Fixed
- Fixed typo in one rule

## [2.0.0] - 2015-09-15
### Changed
- All warnings are now errors

### Removed
- Removed some rules relating to complexity, maximum length, and nesting depth

## [1.0.7] - 2015-09-14
### Changed
- Loosens restriction on `==` for `null` checking (which Flow requires for Maybe types)

## [1.0.6] - 2015-09-14
### Added
- Adds global Flow types for React (`ReactClass` and `ReactElement`)

## [1.0.5] - 2015-09-14
### Changed
- Prefer `var` until Flow adds support for `const`/ `let`

## [1.0.4] - 2015-09-10
### Changed
- Allow `continue`

## [1.0.3] - 2015-09-09
### Changed
- Prefer `const`/ `let`

## [1.0.2] - 2015-09-08
### Changed
- Updated React linting rules

## [1.0.1] - 2015-09-08
### Removed
- Removed unnecessary dependencies

## [1.0.0] - 2015-09-08
### Added
- Initial commit

[Unreleased]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.9.0...HEAD
[5.9.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.8.0...v5.9.0
[5.8.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.7.1...v5.8.0
[5.7.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.7.0...v5.7.1
[5.7.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.6.1...v5.7.0
[5.6.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/5.6.0...v5.6.1
[5.6.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.5.0...v5.6.0
[5.5.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.4.0...v5.5.0
[5.4.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/vv5.3.6...v5.4.0
[5.3.6]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.5...v5.3.6
[5.3.5]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.4...v5.3.5
[5.3.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.3...v5.3.4
[5.3.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.2...v5.3.3
[5.3.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.3.1...v5.3.2
[5.3.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.2.2...v5.3.1
[5.2.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.2.1...v5.2.2
[5.2.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.2.0...v5.2.1
[5.2.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.1.1...v5.2.0
[5.1.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v5.0.0...v5.1.0
[5.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v3.0.4...v4.0.0
[3.0.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v3.0.3...v3.0.4
[3.0.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v2.0.1...v3.0.0
[2.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.7...v2.0.0
[1.0.7]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/ryansobol/eslint-config-ryansobol/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/ryansobol/eslint-config-ryansobol/tree/5ea066257