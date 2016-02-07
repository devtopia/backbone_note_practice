/*global Practice, Backbone*/

Practice.Models = Practice.Models || {};

(function () {
  'use strict';

  Practice.Models.Note = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
      title: '',
      body: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
