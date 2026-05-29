///論理演算子

// &&(and かつ) ・　||(or )もしくは)  ・　！（否定演算子）


console.log(true && true);//true
console.log(true && false);//false
console.log(false && false)//false

console.log(5 > 3 && 10 < 7)//false


console.log(true || true);//true
console.log(true || false);//true
console.log(false || false);//false

console.log(5 > 1 || 5 > 2);//true
console.log(5 > 1 || 5 < 2);//true

console.log(!true);//false
console.log(!false);//true

let age = 17;
let isStudent = true;

if(age >= 18 && isStudent){
    console.log("学生です。")
}else if (age >= 18 && !isStudent){
    console.log("成人していますが学生じゃない。")
}else if (age <= 18 && isStudent){
   console.log("未成年")
}else{
    console.log("成人していないもしくは学生じゃない。")
}

