const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];


// 一覧
app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {id: number, data: detail} );
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
});


// apex

let apexdata = [
  { id: 1, name: "レイス", class: "アサルト",
    passive: "虚空からの声（危険を察知すると警告が聞こえる）",
    senzyutu: "虚空へ（短時間、無敵状態で別次元へ移動する）",
    ultimate: "ディメンションリフト（2地点をつなぐポータルを作成する）" },

  { id: 2, name: "バンガロール", class: "アサルト",
    passive: "駆け足（攻撃を受けると移動速度が上昇する）",
    senzyutu: "スモークランチャー（煙幕を発射して視界を遮る）",
    ultimate: "ローリングサンダー（広範囲に爆撃を要請する）" },

  { id: 3, name: "ブラッドハウンド", class: "リコン",
    passive: "トラッカー（敵の痕跡を視認できる）",
    senzyutu: "全能の目（周囲の敵や罠をスキャンする）",
    ultimate: "ハンティングビースト（移動速度と感知能力が強化される）" },

  { id: 4, name: "ライフライン", class: "サポート",
    passive: "戦闘衛生兵（味方の回復・蘇生を強化する）",
    senzyutu: "D.O.C.ヒールドローン（回復ドローンを展開する）",
    ultimate: "ケアパッケージ（高品質な装備を投下する）" },

  { id: 5, name: "パスファインダー", class: "スカーミッシャー",
    passive: "インサイダー知識（調査ビーコンを使用できる）",
    senzyutu: "グラップリングフック（フックで素早く移動する）",
    ultimate: "ジップラインガン（長距離ジップラインを設置する）" },

  { id: 6, name: "コースティック", class: "コントローラー",
    passive: "Noxビジョン（自分のガス内で敵が見える）",
    senzyutu: "Noxガストラップ（毒ガストラップを設置する）",
    ultimate: "Noxガスグレネード（広範囲に毒ガスを展開する）" },

  { id: 7, name: "ミラージュ", class: "スカーミッシャー",
    passive: "消える男（ダウン時や蘇生時に透明化する）",
    senzyutu: "サイケアウト（デコイを放つ）",
    ultimate: "ライフ・オブ・ザ・パーティー（複数のデコイを展開する）" },

  { id: 8, name: "オクタン", class: "スカーミッシャー",
    passive: "迅速回復（時間経過で体力を回復する）",
    senzyutu: "スティム（体力を消費して移動速度を上げる）",
    ultimate: "ジャンプパッド（高く跳べるパッドを設置する）" },

  { id: 9, name: "ワットソン", class: "コントローラー",
    passive: "天才のひらめき（アルティメット促進剤を即時使用）",
    senzyutu: "周辺セキュリティ（電気フェンスを設置する）",
    ultimate: "迎撃ピロン（投擲物を無効化しシールドを回復する）" },

  { id: 10, name: "クリプト", class: "リコン",
    passive: "ニューロリンク（ドローンが検知した敵を共有する）",
    senzyutu: "監視ドローン（操作可能なドローンを展開する）",
    ultimate: "EMP（ドローンから電磁パルスを放つ）" },

  { id: 11, name: "レヴナント", class: "アサルト",
    passive: "ストーカー（しゃがみ移動が速く壁登りが強化される）",
    senzyutu: "サイレンス（敵のアビリティを封じる）",
    ultimate: "デス・トーテム（一定時間デスプロテクションを付与）" },

  { id: 12, name: "ローバ", class: "サポート",
    passive: "アイ・フォー・クオリティ（戦利品が見える）",
    senzyutu: "バーグラーフの親友（テレポートブレスレット）",
    ultimate: "ブラックマーケット（周囲の戦利品を回収できる）" },

  { id: 13, name: "ランパート", class: "コントローラー",
    passive: "モッド改造（LMGの性能が向上する）",
    senzyutu: "増幅バリケード（遮蔽物を設置する）",
    ultimate: "シーラ（強力なミニガンを使用する）" },

  { id: 14, name: "ホライゾン", class: "スカーミッシャー",
    passive: "スペースウォーク（落下硬直を軽減する）",
    senzyutu: "グラビティリフト（上昇する重力フィールドを展開）",
    ultimate: "ブラックホール（敵を引き寄せる）" },

  { id: 15, name: "ヒューズ", class: "アサルト",
    passive: "グレネーダー（投擲物を遠く速く投げられる）",
    senzyutu: "ナックルクラスター（爆発するクラスターを発射）",
    ultimate: "マザーロード（炎のリングで敵を囲む）" },

  { id: 16, name: "ヴァルキリー", class: "スカーミッシャー",
    passive: "VTOLジェット（空中移動が可能）",
    senzyutu: "ミサイルスウォーム（ミサイルを一斉発射する）",
    ultimate: "スカイウォードダイブ（味方と空中移動する）" },

  { id: 17, name: "シア", class: "リコン",
    passive: "心臓鼓動センサー（敵の心拍を検知する）",
    senzyutu: "フォーカス・オブ・アテンション（敵をスキャンし妨害）",
    ultimate: "エキシビット（敵の動きを可視化するドームを展開）" },

  { id: 18, name: "アッシュ", class: "アサルト",
    passive: "死の刻印（デスボックスの位置を確認できる）",
    senzyutu: "アークスネア（敵を拘束する）",
    ultimate: "フェーズブリーチ（ワープ移動する）" },

  { id: 19, name: "マッドマギー", class: "アサルト",
    passive: "ウォーロードの怒り（ショットガンで移動速度上昇）",
    senzyutu: "ライオットドリル（遮蔽物を貫通するドリル）",
    ultimate: "レッカーボール（敵を吹き飛ばすボールを投げる）" },

  { id: 20, name: "ニューキャッスル", class: "サポート",
    passive: "リトリーブ・ザ・ウォウンデッド（シールドで蘇生）",
    senzyutu: "モバイルシールド（移動可能なシールドを展開）",
    ultimate: "キャッスルウォール（大きな防壁を展開する）" },

  { id: 21, name: "ヴァンテージ", class: "リコン",
    passive: "スポッターズレンズ（遠距離偵察が可能）",
    senzyutu: "エコー配置（相棒バットで移動）",
    ultimate: "スナイパーズマーク（専用スナイパーを使用）" },

  { id: 22, name: "カタリスト", class: "コントローラー",
    passive: "バリケード（強化ドアを作成）",
    senzyutu: "ピアシングスパイク（敵を減速させる）",
    ultimate: "ダークヴェール（視界を遮る壁を展開）" },

  { id: 23, name: "バリスティック", class: "アサルト",
    passive: "スリング（3つ目の武器を携帯できる）",
    senzyutu: "ウィスラー（オーバーヒート弾を発射）",
    ultimate: "テンペスト（味方を強化する）" },

  { id: 24, name: "コンジット", class: "サポート",
    passive: "セイヴァーズスピード（味方の近くで速度上昇）",
    senzyutu: "ラディアントトランスファー（味方にシールド付与）",
    ultimate: "エネルギーバリケード（スロウ効果のある壁を展開）" }
];




app.get("/apex", (req, res) => {
res.render("apex", { data: apexdata });
});

app.get("/apex/create", (req, res) => {
res.redirect("/public/apex_add.html");
});

app.get("/apex/:number", (req, res) => {
  const number = req.params.number;
  const detail = apexdata[ number ];
res.render("apex_detail", { id: number, data: detail });
});

app.get("/apex/check/:number", (req, res) => {
  const number = req.params.number;
  const detail = apexdata[ number ];
  res.render("apex_delete", { id: number, data: detail });
});

app.get("/apex/delete/:number", (req, res) => {
  apexdata.splice(req.params.number, 1);
  res.redirect("/apex");
});

app.post("/apex", (req, res) => {
  const id = apexdata.length + 1;
  const name = req.body.name;
  const className = req.body.class;  
  const passive = req.body.passive;
  const senzyutu = req.body.senzyutu;
  const ultimate = req.body.ultimate;
  apexdata.push({id: id,name: name,class: className,passive: passive,senzyutu: senzyutu,ultimate: ultimate});
  res.render("apex", { data: apexdata });
});

app.get("/apex/edit/:number", (req, res) => {
const number = req.params.number;
res.render("apex_edit", { id: number, data: apexdata[number] });
});


app.post("/apex/update/:number", (req, res) => {
  apexdata[req.params.number].name = req.body.name;
  apexdata[req.params.number].class = req.body.class;
  apexdata[req.params.number].passive = req.body.passive;
  apexdata[req.params.number].senzyutu = req.body.senzyutu;
  apexdata[req.params.number].ultimate = req.body.ultimate;
  
  console.log(apexdata);
  const number = req.params.number;
  const detail = apexdata[ number ];
res.render("apex_detail", { id: number, data: detail });
});


//




app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let your ='';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

  if( hand==1 ) you = 'グー';
  else if( hand==2 ) you = 'チョキ';
  else you = 'パー';

  if(num == 1 && hand == 3) { 
    judgement = '勝ち';
    win += 1;
  }
  else if (num == 2 && hand == 1) { 
    judgement = '勝ち';
    win += 1;
  }
  else if(num == 3 && hand == 2) { 
    judgement = '勝ち';
    win += 1;
  }
  else if( num==hand ) {
    judgement = 'あいこ';
  }
  else judgement = '負け';

  total += 1;
  const display = {
    your: you,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }

  res.render( 'janken2', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));

