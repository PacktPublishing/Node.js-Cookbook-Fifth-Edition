import * as assert from 'node:assert';
import { test } from 'node:test';
import sinon from 'sinon';
import { getGitHubUser } from './github.mjs';

test('Get GitHub user by username', async (t) => {
  const fakeResponse = Promise.resolve({
    json: () => Promise.resolve({
      id: 3430433,
      login: 'octokit',
      name: 'Octokit'
    })
  });

  sinon.stub(global, 'fetch').returns(fakeResponse);

  const githubUser = await getGitHubUser('octokit');

  sinon.restore();

  assert.strictEqual(githubUser.id, 3430433);
  assert.strictEqual(githubUser.login, 'octokit');
  assert.strictEqual(githubUser.name, 'Octokit');
});
