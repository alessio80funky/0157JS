//minus演算子「-」

/**
 * 文字列に使えない（「/」　と　「＊」　と　「＊＊」　と　「％」　と同様）
 * 混合の場合はストリング型の数字はナンバー型の数字として認識されます。
 */

//アルファベット文字使えない
console.log('java' - 'script');//Not a Number

console.log('java' - 10);//Not a Number

///混合のケース

///どのケースでも数字として認識します

console.log(10 - 1);//9

console.log("10" - 1);//9

console.log(10 - "1");//9

console.log("10" - "1");//9
