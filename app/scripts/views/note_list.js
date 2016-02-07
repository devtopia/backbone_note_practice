/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.NoteList = Backbone.View.extend({

    template: JST['app/scripts/templates/note_list.ejs'],

    tagName: 'table',

    id: '',

    className: 'table',

    events: {},

    initialize: function (options) {
      // Backbone.Collectionインスタンスを受け取る
      this.collection = options.collection;
      // this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template);
      this.collection.each(function(note) {
        var noteView = new Practice.Views.Note({
          model: note
        });
        this.$('#noteList').append(noteView.render().$el);
      }, this);
      return this;
    }

  });

})();
