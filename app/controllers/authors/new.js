import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createAuthor(){
			let author = this.get('model');	
			author.save().then(() => {
				this.transitionTo('authors/author', author);
			}).catch(() => {
				//Error
			});	
		}
	}
});
