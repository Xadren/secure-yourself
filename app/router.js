import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('managers');
  this.route('posters', function() {
    this.route('why-hackers-hack');
    this.route('good-password');
    this.route('security-tools');
  });
});

export default Router;
