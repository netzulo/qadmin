import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | qacode/data/lists', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:qacode/data/lists');
    assert.ok(route);
  });
});
