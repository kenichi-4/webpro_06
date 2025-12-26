```mermaid
stateDiagram-v2
    [*] --> /views/nikki.ejs:一覧表示
    /views/nikki.ejs --> /nikki/create:追加
    /nikki/create --> /public/nikki_add.html:リダイレクト
    /public/nikki_add.html --> /nikki
    /nikki --> /views/nikki.ejs:一覧表示に戻る

    /views/nikki.ejs --> /nikki/：number:詳細表示
    /nikki/：number --> /views/nikki_detail.ejs

    /views/nikki_detail.ejs --> /nikki/edit/：number:編集
    /nikki/edit/：number --> /views/nikki_edit.ejs
    /views/nikki_edit.ejs --> /nikki/update/：number
    /nikki/update/：number --> /views/nikki_detail.ejs:詳細表示に戻る

    /views/nikki_detail.ejs --> /nikki

    /views/nikki_detail.ejs --> /nikki/check/：number:消去確認
    /nikki/check/：number --> /views/nikki_delete.ejs

    /views/nikki_delete.ejs --> /nikki/：number:いいえ

    /views/nikki_delete.ejs --> /nikki/delete/：number:はい
    /nikki/delete/：number --> /nikki:リダイレクト
```