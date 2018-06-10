import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | qalab', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:qalab');
    assert.ok(route);
  });
});
