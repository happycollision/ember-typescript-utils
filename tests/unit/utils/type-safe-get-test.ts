import typeSafeGet from 'ember-typescript-utils/type-safe-get';
import { typeSafeGet as _justChecking } from 'ember-typescript-utils';
import { module, test } from 'qunit';

module('Unit | Utility | type-safe-get', function(_hooks) {

  test('it works', function(assert) {
    const test = {a: {b: {c: {d: {e: {f: {g: {h: 'made it!'}}}}}}}};
    
    assert.deepEqual(typeSafeGet(test, 'a'), test.a);
    assert.deepEqual(typeSafeGet(test, 'a', 'b'), test.a.b);
    assert.deepEqual(typeSafeGet(test, 'a', 'b', 'c'), test.a.b.c);
    assert.deepEqual(typeSafeGet(test, 'a', 'b', 'c', 'd'), test.a.b.c.d);
    assert.deepEqual(typeSafeGet(test, 'a', 'b', 'c', 'd', 'e'), test.a.b.c.d.e);
    assert.deepEqual(typeSafeGet(test, 'a', 'b', 'c', 'd', 'e', 'f'), test.a.b.c.d.e.f);
    assert.deepEqual(typeSafeGet(test, 'a', 'b', 'c', 'd', 'e', 'f', 'g'), test.a.b.c.d.e.f.g);
    assert.deepEqual(typeSafeGet(test, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'), test.a.b.c.d.e.f.g.h);
  });

  test('it returns undefined if the initial object is undefined', function(assert) {
    let nothing!: {oops: 'this is just a type, not a value'};
    assert.equal(typeSafeGet(nothing, 'oops'), undefined);
  });
});
