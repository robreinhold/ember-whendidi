import { test } from 'qunit';
import moduleForAcceptance from 'whendidi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list tasks');

test('visiting / should redirect to list-tasks', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/list-tasks', 'URL should be list-tasks');
  });
});

test('Should route to task list', function (assert) {
  visit('/list-tasks');
  andThen(function () {
    assert.equal(currentURL(), '/list-tasks', 'URL should be list-tasks');
    assert.equal(find('.task').length, 2, 'should find 2 tasks on the page');
  });
});

test('should filter the list by task name.', function (assert) {
  visit('/list-tasks');
  fillIn('.list-filter input', '1');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.task').length, 1, 'should show 1 task');
    assert.equal(find('.task .name:contains("1")').length, 1, 'should contain 1 task with 1');
  });
});
