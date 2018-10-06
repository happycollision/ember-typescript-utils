# Ember Typescript Utils

To install in your ember app:

```
ember install ember-typescript-utils
```

Some utilities I find useful in an Ember with Typescript app. Just a quick read below for usage.

## typeSafeGet

### Problem

As [Chris Krycho points out](https://www.chriskrycho.com/2018/typing-your-ember-update-part-3.html), there are two ways to get at nested keys in Ember.

```ts
import { get } from '@ember/object';
const value = get(get(get(anObject, 'some'), 'nested'), 'key');
```

```ts
import { get } from '@ember/object';
// @ts-ignore -- deep lookup with possibly missing parents
const value = get(anObject, 'some.nested.key');
```

The first example is type safe, and the second is not. In addition to being kind of ugly,
the first example will explode if any part of `anObject.some.nested.key` is undefined or null
(except for `key`, it won't blow up then).

### Solution

So why not have both? Slightly different syntax, but it will type check all the way to
8 levels of nesting and will return `undefined` if part of the nested path is missing:

```ts
import typeSafeGet from 'ember-typescript-utils/type-safe-get';
const value = typeSafeGet(anObject, 'some', 'nested', 'key');
```

The type of safeGet is always derived from the object passed in, plus a possible undefined.
For example if `anObject` had an interface of `{some: {nested: {key: string}}}`, then
Typescript would check value as `string | undefined`.

## overrideGet

Same idea as above, except you can use dot notation, and just pass in the expected type.

```ts
import overrideGet from 'ember-typescript-utils/override-get';
const value = overrideGet<string>(anObject, 'some.nested.key');
```

This one has no upward limit on how deeply nested a key can be.
