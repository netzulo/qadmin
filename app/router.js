import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings');
  this.route('qacode', function() {
    this.route('login');
    this.route('logout');
    this.route('forms', function() {
      this.route('inputs');
    });
    this.route('data', function() {
      this.route('lists');
    });
  });
  this.route('qalab');
  this.route('not-found', { path: '/*path' });
});

export default Router;
