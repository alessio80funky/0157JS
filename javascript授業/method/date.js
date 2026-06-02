//Date メソッド

//set系　（日付のデータに対して変更を行う）

const today = new Date();

today.setFullYear(2026, 0, 1);//2026-01-01T03:56:28.119Z //0 = 1月　1= 2月
today.setMonth(2)//2026-03-01T03:58:35.715Z  
today.setDate(3)//2026-03-03T03:59:20.512Z

console.log(today.toLocaleString("jp-JP", //日付データのパターンを決めるメソッド
    {year:"numeric",month:"long", weekday:"long", day:"numeric"}//2026年3月3日火曜日
));

//get系　（日付のデータの取得を行う）

const data = new Date();

console.log(data.getMonth())//5 (6月)
console.log(data.getDay())//2 火曜日
console.log(data.getDate())//2(2日）
console.log(data.getUTCDate())//2(2日）
console.log(data.getUTCFullYear())//2026 

