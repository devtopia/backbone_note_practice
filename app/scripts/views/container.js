/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.Container = Backbone.View.extend({

    show: function(view) {
      this.destroyView(this.currentView);
      this.$el.append(view.render().$el);
      this.currentView = view;
    },

    destroyView: function(view) {
      if(!view) {
        return;
      }
      view.off();
      view.remove();
    },

    empty: function() {
      this.destroyView(this.currentView);
      this.currentView = null;
    },

    has: function(obj) {
      return this.currentView instanceof obj;
    }

  });

})();
