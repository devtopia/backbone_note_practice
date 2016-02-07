/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.NoteForm = Backbone.View.extend({

    template: JST['app/scripts/templates/note_form.ejs'],

    events: {
      'submit form': 'onSubmit'
    },

    onSubmit: function(e) {
      e.preventDefault();
      var attrs = {};
      attrs.title = this.$('.js-noteTitle').val();
      attrs.body = this.$('.js-noteBody').val();
      this.trigger('submit:form', attrs);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})();
