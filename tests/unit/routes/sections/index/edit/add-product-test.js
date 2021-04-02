import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sections/index/edit/addProduct', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sections/index/edit/add-product');
    assert.ok(route);
  });
});
