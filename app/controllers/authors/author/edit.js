import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateAuthor(author){
			author.save().then(() => {
				//Success
			}).catch(() => {
				//Failure
			});
		}
	}
});
