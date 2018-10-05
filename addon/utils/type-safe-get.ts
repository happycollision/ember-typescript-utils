import { get } from '@ember/object';

function arrayGet(obj: any, props: string[]) {
  if (obj === undefined) return obj;
  return get(obj as any, props.join('.')) as any | undefined;
}

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D], F extends keyof T[A][B][C][D][E], G extends keyof T[A][B][C][D][E][F], H extends keyof T[A][B][C][D][E][F][G]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E, prop6: F, prop7: G, prop8: H
): T[A][B][C][D][E][F][G][H] | undefined

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D], F extends keyof T[A][B][C][D][E], G extends keyof T[A][B][C][D][E][F]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E, prop6: F, prop7: G
): T[A][B][C][D][E][F][G] | undefined

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D], F extends keyof T[A][B][C][D][E]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E, prop6: F
): T[A][B][C][D][E][F] | undefined

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C], E extends keyof T[A][B][C][D]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D, prop5: E
): T[A][B][C][D][E] | undefined

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B], D extends keyof T[A][B][C]
>(
  object: T, prop1: A, prop2: B, prop3: C, prop4: D
): T[A][B][C][D] | undefined

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A], C extends keyof T[A][B]
>(
  object: T, prop1: A, prop2: B, prop3: C
): T[A][B][C] | undefined

function typeSafeGet<
  T extends any, A extends keyof T, B extends keyof T[A]
>(
  object: T, prop1: A, prop2: B
): T[A][B] | undefined

function typeSafeGet<
  T extends any, A extends keyof T
>(
  object: T, prop: A
): T[A] | undefined

function typeSafeGet<T extends any>(object: object, ...props: string[]): T | undefined {
  return arrayGet(object, props) as T | undefined;
}

export function overrideGet<T extends any>(object: object, propPath: string): T | undefined
export function overrideGet<T extends any>(object: object, ...props: string[]): T | undefined
export function overrideGet<T extends any>(object: object, ...propPath: string[]): T | undefined {
  return arrayGet(object, propPath) as T | undefined;
}

export default typeSafeGet;