import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteAuthor(author){
			author.destroyRecord();	
		}
	}
});
