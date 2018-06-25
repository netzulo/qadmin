import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | qacode/logout', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:qacode/logout');
    assert.ok(route);
  });
});
