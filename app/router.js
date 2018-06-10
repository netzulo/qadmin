import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings');
  this.route('qacode');
  this.route('qacode-form-login');
  this.route('qacode-form-logout');
  this.route('qacode-form-inputs');
  this.route('qalab');
  this.route('not-found', { path: '/*path' });
});

export default Router;
