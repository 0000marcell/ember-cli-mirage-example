import { test } from 'qunit';
import moduleForAcceptance from 'ember-cli-mirage-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors/author/edit');

test('visiting /authors/author/edit', function(assert) {
	server.create('author');
  visit('/authors/1/edit');
  andThen(function() {
    assert.equal(currentURL(), '/authors/1/edit');
  });
});

test('I can view author information on edit page', function(assert){
	server.create('author');
	visit('/authors/1/edit');
	andThen(() => {
		assert.equal(find('input#name').val(), 'Person 0');
	});
});

test('I can edit author information', function(assert){
	server.create('author');	
	visit('/authors/1/edit');
	andThen(() => {
		fillIn(find('input#name'), 'John Doe');
		click('button#form-submit');
		visit('/authors');
		andThen(() => {
			assert.equal(find('li:first p').text(), 'John Doe');
		});
	});
});
