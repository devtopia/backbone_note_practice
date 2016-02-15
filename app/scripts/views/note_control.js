/*global Practice, Backbone, JST*/

Practice.Views = Practice.Views || {};

(function () {
  'use strict';

  Practice.Views.NoteControl = Backbone.View.extend({

    template: JST['app/scripts/templates/note_control.ejs'],

    // フォームのsubmitイベントの監視を追加する。
    events: {
      'submit .js-search-form': 'onSubmit'
    },

    // submitイベントのハンドラを追加する。
    onSubmit: function(e) {
      e.preventDefault();
      var query = this.$('.js-search-query').val();
      this.trigger('submit:form', query);
    },

    render: function () {
      this.$el.html(this.template);
      return this;
    }

  });

})();
