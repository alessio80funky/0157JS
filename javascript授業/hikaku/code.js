///比較演算子

//評価型　「==. !=, ===, !==」

/**
 * == ->  大体同じ
 * === ->  完全に同じ
 * != ->  少し違う
 * !== ->  完全に違う
 */

//注意。

//実務では　 ===/!==  を使います。　==/!=  バグの温床です。

//falsy値：　false, 0, "", null, undefined, NaNじゃないと代入されない
//truthy値：　true, 数字（０以外）, 文字列（""　これ以外）, 配列, オブジェクト, 関数じゃないと代入されない

let x = 0 == false;
console.log(x);//true

let y = 0 === false;
console.log(y);//false

let z = "" != 0;
console.log(z);//false

let k = "hello" !== 0;
console.log(k);//true

//大小型　「>, <, >=, <=」

let num = 2 > 10;

console.log(num);//false
            //41       //61   プログラムが頭文字で判断します
let str = "Apple" > "banana";
          //32 　　//31
let numb = "2" > "1000";

console.log(str);//false
console.log(numb);//true

//小数点と比較演算子

console.log(3.14 > 3)//true
console.log(3.20 < 3.14)//false

console.log(3.20 >= 3.20)//true
console.log(2.51 <= 2.49)//false

let a = 0.1 + 0.2; 0.30000004

let b = 0.3;

console.log(Math.round(a * 100) / 100 === b)//true

//1. a * 100 = 30.0000004
//2. Math.round = 30にする（四捨五入）
//3. / 100 = 0.3
//4. 0.3 === 0.3 -> true


