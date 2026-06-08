//チェーンメソッド　・　.then() 2015まで使われました
fetch("data.json")//取り扱いたいデータを決めます。-> 途中セミコロンを記述」するとエラーが発生します。
    .then(res => res.json())///Javascriptが読めるようにデータを改造する。
    .then(data => console.log(data))//順にに処理を行う。
    .catch(err => console.log(err));//もしエラーが発生するとこちらが発動します。

    //chain method
    //fetch("data.json").then(res => res.json).then(data => console.log(data)).catch(err => console.log(err));


//async/await

async function load() {

    const res = await fetch(data.json);//取り扱いたいデータを決めます。-
    const data = await res.json();//Javascriptが読めるようにデータを改造する。
//順にに処理を行う。
    try {
        console.log(data);
    } catch (error) {
        console.log(message.error)
    };
  
}