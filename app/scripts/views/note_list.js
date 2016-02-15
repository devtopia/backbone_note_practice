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
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function () {
      // this.$el.html()が呼び出される前に古いビューを破棄しておく。
      // this.removeNoteViews();

      this.$el.html(this.template);
      this.noteViews = this.collection.map(function(note) {
        var noteView = new Practice.Views.Note({
          model: note
        });
        this.$('#noteList').append(noteView.render().$el);
        return noteView;
      }, this);
      return this;
    },

    // すべての子ビューを破棄するメソッドを追加する。
    removeNoteViews: function() {
      // 保持しているすべてのビューのremove()を呼び出す。
      _.invoke(this.noteViews, 'remove');
    }

  });

})();
