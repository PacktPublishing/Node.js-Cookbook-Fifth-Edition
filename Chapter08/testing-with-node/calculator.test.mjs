import test from 'node:test';
import assert from 'node:assert';

import { add } from './calculator.mjs';

test('add', async (t) => {
  await t.test('add integers', () => {
    assert.equal(add(1, 2), 3);
    assert.equal(add(2, 3), 5);
    assert.equal(add(3, 4), 7);
  });

  await t.test('add strings', () => {
    assert.equal(add('1', '2'), 3);
  });
});
