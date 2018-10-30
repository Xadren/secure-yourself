import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | posters/why-hackers-hack', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:posters/why-hackers-hack');
    assert.ok(route);
  });
});
