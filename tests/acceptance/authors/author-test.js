import { test } from 'qunit';
import moduleForAcceptance from 'ember-cli-mirage-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors/author');

test('visiting /authors/author', function(assert) {
	server.create('author');
  visit('/authors/1');
  andThen(function() {
    assert.equal(currentURL(), '/authors/1');
  });
});

test('I can view the authors page', function(assert){
	server.create('author');	
	visit('/authors/1');
	andThen(() => {
		assert.equal(find('h5').text(), 'Person 0'); 
	});
});
