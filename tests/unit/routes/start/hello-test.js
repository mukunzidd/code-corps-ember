import { moduleFor, test } from 'ember-qunit';

moduleFor('route:start/hello', 'Unit | Route | start/hello', {
  // Specify the other units that are required for this test.
  needs: [
    'service:current-user',
    'service:metrics',
    'service:session'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
