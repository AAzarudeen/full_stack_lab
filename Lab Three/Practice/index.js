const first_para = document.querySelector("p")

console.log(first_para.innerText)
console.log(first_para.tagName)

const first_id = document.querySelector("#one")
const second_id = document.querySelector("#two")
const three_id = document.querySelector("#three")
const four_id = document.querySelector("#four")

console.log(first_id.innerText)

console.log(second_id.innerText)

console.log(three_id.innerText)

console.log(four_id.innerText)

const all_para = document.querySelectorAll('p')

for(let i = 0;i < all_para.length;i++){
    console.log(all_para[i].textContent)
}

for(let i = 0;i < all_para.length;i++){
    all_para[i].style.margin = "30px"
    all_para[i].style.background = "black"
    all_para[i].style.padding = "25px"
    all_para[i].style.borderRadius = "35px"
    all_para[i].style.fontSize = "20px"
    all_para[i].style.fontFamily = "Verdana"
}

for(let i = 0;i < all_para.length;i++){
    if(i % 2 === 0){
        all_para[i].style.color = "red"
        continue
    }
    all_para[i].style.color = '#00ff00'
}