```mermaid
stateDiagram-v2
    [*] --> /views/maikura.ejs:一覧表示
    /views/maikura.ejs --> /maikura/create:追加
    /maikura/create --> /public/maikura_add.html:リダイレクト
    /public/maikura_add.html --> /maikura
    /maikura --> /views/maikura.ejs:一覧表示に戻る

    /views/maikura.ejs --> /maikura/：number:詳細表示
    /maikura/：number --> /views/maikura_detail.ejs

    /views/maikura_detail.ejs --> /maikura/edit/：number:編集
    /maikura/edit/：number --> /views/maikura_edit.ejs
    /views/maikura_edit.ejs --> /maikura/update/：number
    /maikura/update/：number --> /views/maikura_detail.ejs:詳細表示に戻る

    /views/maikura_detail.ejs --> /maikura

    /views/maikura_detail.ejs --> /maikura/check/：number:消去確認
    /maikura/check/：number --> /views/maikura_delete.ejs

    /views/maikura_delete.ejs --> /maikura/：number:いいえ

    /views/maikura_delete.ejs --> /maikura/delete/：number:はい
    /maikura/delete/：number --> /maikura:リダイレクト
```