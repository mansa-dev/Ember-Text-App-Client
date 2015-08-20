import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('text', { path: '/texts' });
  this.route('text');
});

export default Router;
