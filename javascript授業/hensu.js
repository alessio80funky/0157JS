//変数

/* 

変数はデータの入れ物です、開いた箱です。
変わる可能性のデータを取り扱う。
変数はletで始まります。

*/

let hako1 = "アレッシオ";
let hako2 = 10;

console.log(hako1);

/*

let + 変数名　+ = + 値　（データのこと）

*/

//定数

/*

定数もデータの入れ物ですが、一度その箱の中にデータを入れると入れ替えられないデータになります。
固定にしたいデータを取り扱う。
定数はconstで始まります。

*/

const TAX = 1.1;
let price = 1000;

console.log(price * TAX);

/*

定数をと変数を使う利点

1.データを整理して管理しやすくなります。
2.エラーを防げる。
3.コードがわかりやすくなります。

*/


/*

const + プロパティ名　+ = + 値　（データのこと）

*/

//変数・定数に関しての注意

//let

//再代入が可能です
//再宣言が不可能です。同じ名前で再宣言できません。

let a = 10;
a = 20;
console.log(a);

//const

//再代入が不可能です
//再宣言が不可能です。同じ名前で再宣言できません。

const b = 10;
//b = 20; 再代入が不可能です
console.log(b);

//関数

//関数はデータを処理するものです。

let name = "アレッシオ";

function sensei(){
    console.log(name);
};

sensei(); //宣言関数

/*

function  関数名(値　もしくは　引数)｛

処理したいデータを書きます

｝


*/


/*
javascriptの記法

1.キャメルケース　ー＞　lastName ー＞　変数か関数によく使います

2.パスカルケース　ー＞  LastName  ー＞　クラス名に使います　（そんなに使わない）

3.アンダースコアケース　ー＞　last_name LAST_NAME ー＞　定数によく使ったりします。（データベースのカラムとかAPIのキー）

4.チェーンケース　ー＞　last-name => 　万能です。（主にCSS関連によくつかいます）

*/

//書き方

//OK

const color1 = "black";

const my_Color = "red";

const myColor = "red";

let my_color = "red";


//NG 
 
//const my Color = "red";

//const my-Color = "red";

//const 1color = "black"

//const 1let = "black"

///予約語つかわない！　↓↓↓↓↓↓↓↓↓↓

//let if = "color";

//let const = "alessio"

//const let = "mario"  これはオッケーですが、こういう風に書かないほうがいい。