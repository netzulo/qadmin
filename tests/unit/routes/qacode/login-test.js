import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | qacode/login', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:qacode/login');
    assert.ok(route);
  });
});
