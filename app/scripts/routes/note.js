/*global Practice, Backbone*/

Practice.Routers = Practice.Routers || {};

(function () {
  'use strict';

  Practice.Routers.Note = Backbone.Router.extend({
    routes: {
      'notes/:id': 'showNoteDetail',
      'new': 'showNewNote',
      'notes/:id/edit': 'showEditNote',
      '*actions': 'defaultRoute'
    },

    defaultRoute: function() {
      this.showNoteList();
      this.navigate('notes');
    },

    // ルーティングが受け取った:idパラメータはそのまま引数名idで受け取れる。
    showNoteDetail: function(id) {
      var note = Practice.noteCollection.get(id);
      var noteDetailView = new Practice.Views.NoteDetail({
        model: note
      });
      Practice.mainContainer.show(noteDetailView);

      // メモの詳細画面でボタンを消したいのでPractice.Views.Containerのempty()メソッドを呼び出してビューを破棄しておく
      Practice.headerContainer.empty();
    },

    showNoteList: function() {
      // コレクションを渡してメモ一覧の親ビューを初期化する。
      var noteListView = new Practice.Views.NoteList({
        collection: Practice.noteCollection
      });

      // 表示領域にメモ一覧を表示する。
      Practice.mainContainer.show(noteListView);

      // メモ一覧操作ビューを表示するメソッドの呼び出しを追加する。
      this.showNoteControl();
    },

    showNoteControl: function() {
      var noteControlView = new Practice.Views.NoteControl();
      Practice.headerContainer.show(noteControlView);
    },

    showNewNote: function() {
      var self = this;
      // テンプレートの<%= title %>などの出力を空文字列で空欄にしておくため、
      // 新規に生成したNoteモデルを渡してNoteFormViewを初期化する。
      var noteFormView = new Practice.Views.NoteForm({
        model: new Practice.Models.Note()
      });

      noteFormView.on('submit:form', function(attrs) {
        // submit:formイベントで受け取ったフォームの入力値をNoteCollectionコレクションのcreate()に
        // 渡してNoteモデルの新規作成と保存を行う。
        Practice.noteCollection.create(attrs);

        // モデル一覧を表示してルートを#notesに戻す。
        self.showNoteList();
        self.navigate('notes');
      });

      Practice.mainContainer.show(noteFormView);

      // New Note ボタンはこの画面では必要ないので、ビューを破棄しておく。
      Practice.headerContainer.empty();
    },

    showEditNote: function(id) {
      var self = this;
      // 既存のNoteモデルを取得してNoteFormViewに渡す
      var note = Practice.noteCollection.get(id);
      var noteFormView = new Practice.Views.NoteForm({
        model: note
      });

      noteFormView.on('submit:form', function(attrs) {
        // submit:formイベントで受け取ったフォームの入力値をNoteモデルに保存する。
        note.save(attrs);

        // モデル詳細画面を表示してルートも適切なものに書き換える。
        self.showNoteDetail(note.get('id'));
        self.navigate('notes/' + note.get('id'));
      });

      Practice.mainContainer.show(noteFormView);
    }
  });

})();
