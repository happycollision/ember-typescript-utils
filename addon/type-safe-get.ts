import { get } from '@ember/object';

function arrayGet(obj: any, props: string[]) {
  if (obj === undefined) return obj;
  return get(obj as any, props.join('.')) as any | undefined;
}

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D], F extends keyof T[A][B][C][D][E], G extends keyof T[A][B][C][D][E][F], H extends keyof T[A][B][C][D][E][F][G]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E, prop6: F, prop7: G, prop8: H
): T[A][B][C][D][E][F][G][H] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D], F extends keyof T[A][B][C][D][E], G extends keyof T[A][B][C][D][E][F]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E, prop6: F, prop7: G
): T[A][B][C][D][E][F][G] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D], F extends keyof T[A][B][C][D][E]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E, prop6: F
): T[A][B][C][D][E][F] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E
): T[A][B][C][D][E] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D
): T[A][B][C][D] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B]
>(
  object: T, prop1: A, prop2: B, prop3: C
): T[A][B][C] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A]
>(
  object: T, prop1: A, prop2: B
): T[A][B] | undefined

/**
 * Retains type-safety for a well typed object whose return from Ember's `get` might be `undefined`.
 * Use this when you have an object whose nested properties might be undefiend at some point in
 * the path, but is actually typed in a way that does not account for that.
 * 
 * Will work up to 8 levels deep.
 * 
 * @param object 
 * @param prop1 nested property name
 * @param prop2 etc... to 8 properties
 * 
 * Example:
 ```
declare let object: { a: { b: { c: number } } };
typeSafeGet(object, 'a', 'b');  // { c: number } | undefined
typeSafeGet(object, 'a', 'b', 'c');  // number | undefined
 ```
 */
function typeSafeGet<
  T extends any, A extends keyof T
>(
  object: T, prop: A
): T[A] | undefined

function typeSafeGet<T extends any>(object: object, ...props: string[]): T | undefined {
  return arrayGet(object, props) as T | undefined;
}

/**
 * Use this exactly like Ember's `get`. However, you can specify the type, and Typescript 
 * will assume the type you pass in or undefined.
 * 
 * @param object The object with the nested property you want
 * @param propPath a dot-separated path to the nested value you want
 * 
 * Example:
```
const result = overrideGet<MyThing>(anObject, 'a.b.c.d');
// `result` is type MyThing | undefined
```
 */
export function overrideGet<T extends any>(object: object, propPath: string): T | undefined
/**
 * Use this exactly like this addon's `typeSafeGet`. However, you can specify the type, and Typescript 
 * will assume the type you pass in or undefined. If your object is well-typed, you probably
 * want to use `typeSafeGet`.
 * 
 * @param object The object with the nested property you want
 * @param props each argument is a string representing the next nested property of the object
 * 
 * Example:
```
const result = overrideGet<MyThing>(anObject, 'a', 'b', 'c', 'd');
// `result` is type MyThing | undefined
```
 */
export function overrideGet<T extends any>(object: object, ...props: string[]): T | undefined
export function overrideGet<T extends any>(object: object, ...propPath: string[]): T | undefined {
  return arrayGet(object, propPath) as T | undefined;
}

export default typeSafeGet;