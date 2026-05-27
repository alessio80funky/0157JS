//掛け算と割り算と小点数の計算について

console.log(0.2 * 3);//0.6 ->0.6000000000000001

console.log(((0.2 * 10) * 3) / 10);///記述が複雑になる

//math.round

let x = 0.14 * 100;
let y = 0.28 * 100;

console.log(x);//14.000000000000002

console.log(y);//28.000000000000004

console.log(x + y);//42.00000000000001

console.log(Math.round(x + y));//42

