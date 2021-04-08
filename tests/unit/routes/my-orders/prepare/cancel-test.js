import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myOrders/prepare/cancel', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-orders/prepare/cancel');
    assert.ok(route);
  });
});
