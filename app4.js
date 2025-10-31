const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

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
