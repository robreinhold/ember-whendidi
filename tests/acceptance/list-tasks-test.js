import { test } from 'qunit';
import moduleForAcceptance from 'whendidi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list tasks');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('Should route to task list', function (assert) {
  visit('/list-tasks');
  andThen(function () {
    assert.equal(currentURL(), '/list-tasks', 'should match');
    assert.equal(find('.task').length, 2, 'should see 2 tasks');
  });
});
