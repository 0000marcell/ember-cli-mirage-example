import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authors', function() {
    this.route('author', {
      path: ':author_id'
    }, function() {
      this.route('posts');
      this.route('edit');
    });
    this.route('new');
  });
});

export default Router;
