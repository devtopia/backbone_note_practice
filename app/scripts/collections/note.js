/*global Practice, Backbone*/

Practice.Collections = Practice.Collections || {};

(function () {
  'use strict';

  Practice.Collections.Note = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('Notes'),
    model: Practice.Models.Note

  });

})();
