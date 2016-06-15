import { test } from 'qunit';
import moduleForAcceptance from 'ember-cli-mirage-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authors/author/posts');

test('visiting /authors/author/posts', function(assert) {
	server.create('author');
  visit('/authors/1/posts');
  andThen(function() {
    assert.equal(currentURL(), '/authors/1/posts');
  });
});

test('I can view the author posts page', function(assert){
	var author = server.create('author');	
	server.createList('post', 10, { author });
	visit('/authors/1/posts');
	andThen(() => {
		assert.equal(find('li').length, 11);
	});
});
