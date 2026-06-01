//for文

/*

for(条件のインプット　；　条件　；　インクリメント「++」ー＞ループを制御するための演算子){

        繰り返したい処理の内容を命令内に書きます。

}
            
*/
for (let i = 5; i < 11; i++){
    console.log("i = " + i);
}
//補足
///複数の値を取り扱う場合は必ずカンマ区切りで分ける

for (let j = 5 , k = 5; j < 10; j++, k++){
    console.log(j * k);
}

//注意

/*

①小点数を指定しない

for(let i = 0.1; i < 5; i += 0.1){
        console.log(i)
}

②無限ループ

for (let i = 5; i < 11; ){
    console.log("i = " + i);
}

for (let i = 5; i < 11;　i--){
    console.log("i = " + i);
}

for (; ;　){
    console.log("i = " + i);
}

*/

//オブジェクトに使うfor文

//for...in

//オブジェクトのキーを順番に取り出す命令

const obj = {
    name: "mario",
    age:"42",
    occupation:"plumber"
}

for(let key in obj){
    console.log(key, "=", obj[key])
} // name = mario age = 42 occupation = plumber


//配列に使うfor文

//for...of

//配列の値を順番に取り出す命令

const arr = ["red", "green", "blue"];

for (let value of arr){
    console.log(value) // red green blue
}


//for...inをつかうと値のインデックスを取り出す(配列にはfor...in使われない)
for (let value in arr){
    console.log(value) //0 1 2 
}

//for..ofの分割代入

//配列の中にたくさん配列がの配列がある場合

const color = [
    ["apricot", "オレンジ"],
    ["strawberry", "赤"],
    ["バナナ", "黄"],
];

for(let [fruits, colors] of color){
    console.log(`${fruits}は${colors}色です`)
}

//配列の中にたくさんのオブジェクトがある場合

const color2 = [
    {fruit:"apricot", color:"オレンジ"},
    {fruit:"strawberry", color:"赤"},
    {fruit:"バナナ", color:"黄"},
];

for(let {fruit, color} of color2){///オブジェクト受け皿は同じキープロパティでなければならない
    console.log(`${fruit}は${color}色です`)
}

