import { test } from 'qunit';
import moduleForAcceptance from 'ember-cli-mirage-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors/new');

test('visiting /authors/new', function(assert) {
  visit('/authors/new');

  andThen(function() {
    assert.equal(currentURL(), '/authors/new');
  });
});

test('I can create new authors', function(assert){
	visit('/authors/new');	
	andThen(() => {
		fillIn(find('input#name'), 'John Doe');
		click('button#form-submit');
		visit('/authors');
		andThen(() => {
			assert.equal(find('li').length, 1); 
			assert.equal(find('li:first p').text(), 'John Doe');
		});
	});
});
