//try...catch...finally

//tryの中にエラーが発生すると、処理が一時的に止まってcatchに渡す
//catchがエラーを受け取り、代理処理やエラー通知を行う。
//finallyは後処理を行う命令です。

try{
    let x = 2;
}catch(error){
    console.log("エラー：",error.message);
}

//finally

//エラーがあってもなくても必ず実行される
//後処理役

try{
    console.log("処理開始");
}catch(error){
    console.log("エラー：",error.message);
}finally{
      console.log("仕上がり処理");
};