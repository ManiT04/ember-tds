import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('board');
  this.route('order', {path:'order/:order_id'});
  this.route('sections', function() {
    this.route('index', function() {
      this.route('add');
      this.route('addProduct');

      this.route('edit', function() {
        this.route('delete', {path: '/:section_id/delete/:product_id'});
        this.route('edit', {path: '/:section_id/edit/:product_id'});
        this.route('addProduct', {path: '/:section_id/addProduct'});
      });
    });
    this.route('edit', {path: 'edit/:section_id'});
    this.route('delete', {path: 'delete/:section_id'});
  });

  this.route('products', function() {
    this.route('add');
  });

});
