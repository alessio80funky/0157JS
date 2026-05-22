/*const text = document.getElementById("colorText");
const color = document.getElementById("colorPicker");*/

const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");



/*
function colorBg(){
     document.body.style.backgroundColor = color.value;

    if (color.value === "#FFFFFF"){
        text.content = `カラーコード：${color.value} (white)`
    } else if (color.value === "#000000"){
         text.content = `カラーコード：${color.value} (black)`
    } else {
         text.content = `カラーコード：${color.value}`
    }
}
*/
const colorBg = () => {

    document.body.style.backgroundColor = color.value;

    text.textContent = `カラーコード： ${color.value}`;
}

color.addEventListener("input", colorBg)

