//.toUpperCase()

const lang = "javascript";
console.log(lang.toUpperCase())//JAVASCRIPT

//.toLowerCase()

const lang2 = "JAVASCRIPT";
console.log(lang.toLowerCase())//javascript

//.indexOf()
            // 0123456789
const lang3 = "JAVASCRIPT";
console.log(lang3.indexOf("J"))//0

//.indcludes("")
const lang4 = "JAVASCRIPT";
console.log(lang4.includes("J"))//true

//.slice(0, 3)

const lang5 = "JAVASCRIPT";
                ///スタート, 範囲をしてする
console.log(lang5.slice(0, 3))//JAV　ー＞この場合は3番目ふくめず

//.replace("JAVA", "TYPE")

const lang6 = "JAVASCRIPT";
console.log(lang6.replace("JAVA", "TYPE"))