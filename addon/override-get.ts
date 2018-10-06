import { get } from '@ember/object';

function arrayGet(obj: any, props: string[]) {
  if (obj === undefined) return obj;
  return get(obj as any, props.join('.')) as any | undefined;
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

export default overrideGet;