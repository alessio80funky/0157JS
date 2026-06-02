function Taiyaki(flavor){
    this.flavor = flavor;
}


const taiyaki1 = new Taiyaki("custard");
const taiyaki2= new Taiyaki("chocolate");
const taiyaki3 = new Taiyaki("anko")


console.log(taiyaki1);
console.log(taiyaki2);
console.log(taiyaki3);


/*
const car1 = {
    maker: "toyota",
    type: "carola",
    year:"2024",
    color:"red"
}

const car2 = {
    maker: "Chevrolet",
    type: "camaro",
    year:"2025",
    color:"blue"
}

const car3 = {
    maker: "Dodge",
    type: "charger",
    year:"2026",
    color:"green"
}
*/

function Car(maker, type, year, color){
    this.maker = maker;
    this.type= type;
    this.year = year;
    this.color = color;
}

const car1 = new Car("toyota","carola","2024","red");
const car2 = new Car("Chevrolet","camaro", "2025", "blue");
const car3 = new Car("dodge","charger" , "2026", "green")


console.log(car1.color)

//numbetとstringの場合はnewを書かずにオブジェクトを構築します

//string  コンストラクター

const str = String(1234); //ストリング以外のデータをストリングにする

//number コンストラクター

const num = Number("1234"); //ストリング系の数字をナンバー型にする

//array コンストラクター

const arr = new Array("リンゴ","バナナ");

console.log(arr);

//Date  コンストラクター

const now = new Date();

console.log(now);


//その他


//Map  コンストラクター　(使われるケースが少ない)
const map = new Map([["name","alessio"], ["age","36"]]);
console.log(map.get("age"));

//Set/コンストラクター (使われるケースが少ない)
const set = new Set([1,2,3,4,4])
console.log(set);

//object  コンストラクター (あまり使われていない)
const obj = new Object({name:"taro",age:"23"})
console.log(obj);
