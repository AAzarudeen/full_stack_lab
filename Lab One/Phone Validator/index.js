const input_box = document.getElementById("number")
const check_btn = document.getElementById("check")

const input_area = document.getElementById("number_area")
const check_area = document.getElementById("check_for_area")

check_btn.addEventListener("click",function(e){isPhone(input_box.value)})
check_area.addEventListener("click",function(e){isPhoneArea(input_area.value)})

function isPhone(number){
    const pattern = /^(([0-9]){10}|([0-9]{3} [0-9]{3} [0-9]{4})|([0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]){10}|([0-9]{3} [0-9]{3} [0-9]{4})|(\([0-9]{3}\)[0-9]{3}-[0-9]{4})|(\([0-9]{3}\) [0-9]{3}-[0-9]{4}))$/
    console.log(pattern.test(number))
}

function isPhoneArea(number){
    const pattern = /(([0-9]){10}|([0-9]{3} [0-9]{3} [0-9]{4})|([0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]){10}|([0-9]{3} [0-9]{3} [0-9]{4})|(\([0-9]{3}\)[0-9]{3}-[0-9]{4})|(\([0-9]{3}\) [0-9]{3}-[0-9]{4}))/
    alert(pattern.test(number))
}