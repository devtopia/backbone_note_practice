/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.NoteDetail = Backbone.View.extend({

    template: JST['app/scripts/templates/note_detail.ejs'],

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})();
