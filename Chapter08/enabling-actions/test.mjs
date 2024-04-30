import { strictEqual } from 'node:assert';
import { test } from 'node:test';

test('test integer addition', async (t) => {
  strictEqual(1 + 1, 2, '1 + 1 should equal 2');
});

test('test string addition', async (t) => {
  // This test is expected to fail because "11" is not numerically 2
  strictEqual('1' + '1', 2, 'Concatenation of "1" and "1" does not equal 2');
});
