const input_box = document.getElementById("number")
const check_btn = document.getElementById("check")

check_btn.addEventListener("click",function(e){isPhone(input_box.value)})

function isPhone(number){
    const pattern = /^(#([0-9a-fA-F]{3})|#([0-9a-fA-F]{6}))|rgb\((?:[1-9][0-9]?|100)%,(?:[1-9][0-9]?|100)%,(?:[1-9][0-9]?|100)%\)$/
    alert(pattern.test(number))
}