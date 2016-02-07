/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.Note = Backbone.View.extend({

    template: JST['app/scripts/templates/note.ejs'],

    tagName: 'tr',

    id: '',

    className: '',

    events: {
      // Deleteボタンを監視してonClickDelete()メソッドを呼び出す。
      'click .js-delete': 'onClickDelete'
    },

    initialize: function () {
      // モデルのdestroyイベントを監視してBackbone.Viewのremove()メソッドを呼び出す。
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    onClickDelete: function() {
      // モデルを削除する。
      this.model.destroy();
    }

  });

})();
