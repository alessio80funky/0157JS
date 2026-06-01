//分割代入

//分割代入はオブジェクトの中身をもっとシンプルに取り出すためのテクニック

//配列の分割代入

let fruits = ["apple", "banana" ,"orange"];

//console.log(fruits[0]); -> apple

///従来の分割代入の書き方

let ringo = fruits[0];
let banana = fruits[1];
let orange = fruits[2];

console.log(ringo, banana ,orange);
console.log(banana);

//さらにシンプルに

let [f1,f2,f3] = fruits;//一気に分割

console.log(f1);//apple

//...other


let data = [1,2,3,4,5,6,7,8,9,10];

let [x1,x2,x3, ...other] = data;

console.log(x1);
console.log(...other)

//オブジェクトの分割代入

let user = {
    name:"marco",
    age:"26",
    country:"japan"
}

///従来の分割代入の書き方

let k1 = user.name;

let k2 = user.age;

console.log(k1);//marco



//さらにシンプルに

let {name, age} = user; ///もとのキープロパティは指定しないといけない

console.log(name, age);


//...rest

let user2 ={
    name2:"alessio",
    age:36,
    job:"engineer"
}

let {name2, ...rest} = user2;

console.log(name2);

console.log(rest);//「...」は要らない

