//if分

/*

else if  は複数の条件を取り扱うために使用する命令です。

if(条件){
最初条件があっていれば、こちら内容を発動する。
}else if(条件){
こちらの条件があっていれば、こちら内容を発動する。
}else{
    上記条件がどっちも合わなければ、こちらを発動する。
}

*/

let score = 55;

if(score >= 90){
    console.log("A");
}else if(score >= 70){
    console.log("B");
}else if(score >= 60){
    console.log("C");
}else{
    console.log("D");
};

///注意点

//NG

//if  ネスト
let age = 18;
let isMember = false;

if (age >= 18){
    if (isMember){
        console.log("会員です(18歳以上の会員です。)")
    }else{
        console.log("会員じゃないです。登録してください")
    }
}else{
    console.log("未成年登録できません");
}

if (age >= 18 && isMember){
    console.log("会員です(18歳以上の会員です。)");
} else if (age >= 18 && !isMember){
     console.log("会員じゃないです。登録してください");
}else{
      console.log("未成年登録できません");
};


///波括弧を省略しない！

if (x > 0)
    console.log("ok")

//OK
if (x > 0){
    console.log("ok")
}
