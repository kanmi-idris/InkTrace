---
title: You Don't Need Lodash/Underscore — Native JS Alternatives + ESLint Plugin
kind: paste
captured_at: 2026-07-21 09:21
tags: [javascript, lodash, underscore, native, eslint-plugin, reference]
source_url: 
status: inbox
---

# You Don't Need Lodash/Underscore — Native JS Alternatives + ESLint Plugin

# You Don't Need Lodash/Underscore

**GitHub**: github.com/you-dont-need/You-Dont-Need-Lodash-Underscore (19.2k★, 814 forks, MIT)
**NPM**: eslint-plugin-you-dont-need-lodash-underscore (v6.14.0, latest Apr 3 2024)
**Website**: you-dont-need.github.io/You-Dont-Need-Lodash-Underscore/
**Languages**: JavaScript (100%), 558 commits

## Overview
A comprehensive reference guide listing native JavaScript (ES5/ES6/ES2019+) alternatives to Lodash and Underscore utility functions. Includes an ESLint plugin (`eslint-plugin-you-dont-need-lodash-underscore`) to flag places where native equivalents can replace Lodash/Underscore calls. MIT license.

## Coverage (9 categories, 70+ methods)

### Array (27 methods)
chunk, compact, concat, difference, drop, dropRight, fill, find, findIndex, first, flatten, flattenDeep, fromPairs, head/tail, indexOf, intersection, isArray, isArrayBuffer, join, last, lastIndexOf, reverse, slice, without, initial, pull, unionBy, takeRight

### Collection (19 methods)
each, every, filter, groupBy, includes, keyBy, map, minBy/maxBy, pluck, range, reduce, reduceRight, reject, sample, size, some, sortBy/orderBy, uniq, uniqWith

### Function (6 methods)
after, bind, debounce, isFunction, partial, throttle

### Lang (11 methods)
castArray, cloneDeep, gt, gte, isDate, isEmpty, isFinite, isInteger, isNaN, isNil, isNull, isUndefined

### Object (14 methods)
assign, defaults, extend, has, get, invert, isPlainObject, keys, mapKeys, omit, pick, pickBy, toPairs, values

### String (14 methods)
capitalize, endsWith, isString, lowerFirst, padStart/padEnd, repeat, replace, split, startsWith, template, toLower, toUpper, trim, upperFirst

### Util, Number (3+3 methods)
times, clamp, inRange, random

## Key notes
- Most native equivalents are array methods and won't work with objects; Lodash/Underscore may still be better for object iteration
- Lodash methods are null-safe (e.g. _.keys, Object.keys); native equivalents may need null guards
- Targets modern browsers (ES5/ES6+); legacy engines may need es5-shim
- ESLint plugin: install `npm install --save-dev eslint-plugin-you-dont-need-lodash-underscore`, extend `plugin:you-dont-need-lodash-underscore/compatible`
