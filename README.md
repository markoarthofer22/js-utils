# JS UTILS

[![Coverage Status](https://coveralls.io/repos/github/ultraq/array-utils/badge.svg?branch=main)](https://coveralls.io/github/markoarthofer22/js-utils?branch=main)
[![npm](https://img.shields.io/npm/v/@markoarthofer22/js-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@markoarthofer22/js-utils)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@markoarthofer22/js-utils)](https://bundlephobia.com/result?p=@markoarthofer22/js-utils)

A collection of js utilities written with TS, meant as a zero-dependency way of working with
arrays, objects and formatters.

## Installation

Via npm:

```
npm install @markoarthofer22/js-utils
```

## Usage

Just import function that you want to use

```js
import {first, last ...} from "@markoarthofer22/js-utils"
```

## ARRAY API

### first(array)

Returns first element in the array (or if you pass 2nd param, first `n` of elements)

**usage**

```ts
first<T>(array: T[], n = 1 );
```

### last(array)

Returns last element in the array ((or if you pass 2nd param, last `n` of elements))

**usage**

```ts
last<T>(array: T[], n = 1);
```

### sample(array)

Returns randomized element from the array

**usage**

```ts
sample<T>(array: T[]);
```

### pluck(array)

Returns randomized element from the array

**usage**

```ts
sample<T>(array: T[]);
```

### chunk(array)

Returns element by key value

**usage**

```ts
chunk<T>(array: T[], key: keyof T);
```

### groupBy(array)

Returns object with values grouped by passed key value

**usage**

```ts
groupBy<T>(array: T[], key: keyof T);
```

### allBut(array)

Returns all elements execpt elements sent as args

**usage**

```ts
allBut<T>(array: T[], ...args: any[]);
```

## DOM HELPERS API

### qs(selector)

shorthanded function that acts as `querySelector()`. By default it takes `document` node as parent

**usage**

```ts
qs(selector, (parent = 'document'));
```

### qsa(sorelect)

shorthanded function that acts as `querySelectorAll()`. By default it takes `document` node as parent.
It returns values as a new array, so you can use all of the array methods (`map`, `filter` etc..)

**usage**

```ts
qsa(selector, (parent = 'document'));
```

## VALUE FORMATTERS API

### formatCurrency(number), formatNumber(number), formatCompactNumber(number)

Pretty self explanatory. formatCurrency formats to USD (for now, will accept a localization param). formatCompactNumber gives back shorthened numeric value (10000 as 10k etc...)
