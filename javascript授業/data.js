//データ型

/*

基本型　（プリミティブ型）

①　number型　（数値型）ー＞　数字のこと

②　string型　（文字列）ー＞　テキスト

③　boolean型　（判断型）ー＞　true / false 真・偽

④　特殊型　ー＞　null (データが存在しないという意味です)    ・　　undefined(定義されていないデータ型のことです)
cle
*/
//整数と少数どちらもnumber型

let num = 10; //number型
let num = 0.5;//number型


let srt = "アレッシオ"; //string型 -> "" もしくは　''　で囲んでいます

let message = `hello ${name}`; //テンプレート文字列　ー＞バッククォート

let str = "mario" + "luigi";// "+"　文字列に使える算術演算子こちらのみはこちらのみ 
console.log(str);

let boolean1 = true;//boolean型
let boolean2 = false;//boolean型

let name = null;//特殊型
let surname = undefined;//特殊型


/*

参照型

array型　（配列）　ー＞　データの集合

object型　(オブジェクト)　ー＞　データの集合

*/

let numbers = [1,2,3,4,5,6,7,8,9] //配列　[]　で囲んでいます
            //   0        1          2
let fruits = ["apple", "banana", "orange"];//インデックスー＞整理番号

console.log(fruits);

console.log(fruits[0]);//配列内の特定のデータを取り出すための命令


let object = { //オブジェクト　ー＞　{}  で囲んでいます 
 //キー　：　""値"
    name:"alessio",
    age: "36",
    nationality: "italy",
    ethnicity: "jew"
}

console.log(object);//{ name: 'alessio', age: '36', nationality: 'italy', ethnicity: 'jew' }

console.log(object.age);//36


