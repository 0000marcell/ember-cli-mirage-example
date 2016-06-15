import Ember from 'ember';

export default Ember.Route.extend({
	model(param){
		return this.store.find('author', param.author_id);
	}
});
