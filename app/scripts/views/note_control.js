/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.NoteControl = Backbone.View.extend({

    template: JST['app/scripts/templates/note_control.ejs'],

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

})();
