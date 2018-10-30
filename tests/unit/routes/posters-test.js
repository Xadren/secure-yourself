import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | posters', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:posters');
    assert.ok(route);
  });
});
