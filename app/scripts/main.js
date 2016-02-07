/*global Practice, $*/


window.Practice = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    // ダミーのNoteモデルを生成する。
    var noteCollection = new Practice.Collections.Note([{
      title: 'テスト1',
      body: 'テスト1です'
    }, {
      title: 'テスト2',
      body: 'テスト2です'
    }, {
      title: 'テスト3',
      body: 'テスト3です'
    }]);

    // 作成したモデルはローカルストレージに保存する。
    noteCollection.each(function(note) {
      note.save();
    });

    // この処理で作ったコレクションは一時的な用途であり
    // 必要なのは中身のモデルなのでモデルの配列を返す。
    return noteCollection.models;
  }
};

$(document).ready(function () {
  'use strict';

  // noteCollectionを初期化する。
  // 後で別のjsファイルからも参照するので、Practice名前空間下に参照を持たせておく。
  Practice.noteCollection = new Practice.Collections.Note();

  // メモ一覧のビューを表示する領域としてmainContainerを初期化する。
  // こちらも同様の理由でPractice配下に参照を持たせる。
  Practice.mainContainer = new Practice.Views.Container({
    el: '#main-container'
  });

  Practice.headerContainer = new Practice.Views.Container({
    el: '#header-container'
  })

  // noteCollectionコレクションのデータを受信する。
  // backbone.localStorageを使用しているのでブラウザのローカルストレージから読み込む。
  Practice.noteCollection.fetch().then(function(notes) {
    // もし読み込んだデータが空であればダミーデータでコレクションの中身を上書きする。
    if (notes.length === 0) {
      var models = Practice.init();
      Practice.noteCollection.reset(models);
    }

    // ルータの初期化と履歴管理の開始
    Practice.noteRouter = new Practice.Routers.Note();
    Backbone.history.start();
  })
});
