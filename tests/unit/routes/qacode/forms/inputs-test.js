import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | qacode/forms/inputs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:qacode/forms/inputs');
    assert.ok(route);
  });
});
