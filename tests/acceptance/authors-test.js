import { test } from 'qunit';
import moduleForAcceptance from 'ember-cli-mirage-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors');

test('visiting /authors', function(assert) {
  visit('/authors');
  andThen(function() {
    assert.equal(currentURL(), '/authors');
  });
});

test('I can view the authors', function(assert){
	let authors = server.createList('author', 3);	
	visit('/authors');
	andThen(() => {
		assert.equal(find('li').length, 3); 
		assert.equal(find('li:first p').text(), authors[0].name);
	});
});

test('I can remove an author', function(assert){
	server.createList('author', 3);	
	visit('/authors');
	andThen(() => {
		click('button#delete:first');
		andThen(() => {
			assert.equal(find('li').length, 2);	
		});
	});
});
