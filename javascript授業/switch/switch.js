//switch文

/* 

switch(引数){
    case "値1"　: 
    "値1"の場合はこちらを発動する
    break;
    case "値2"　: 
    "値2"の場合はこちらを発動する
    break;
    default:
         以外のケース場合はこちらを発動する
}

*/

let rank = "silver";

switch(rank){
    case "silver":
        console.log("5%OFF")
    break;
    case "gold":
        console.log("10%OFF")
     break;
    case "platinum":
        console.log("15%OFF")
    break;
    default:
        console.log("割引なし")
};

//break  を書かずに発動するとFall throughの現象が発生します。