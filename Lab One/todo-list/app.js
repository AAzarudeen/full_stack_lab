const add_input = document.getElementById("add_input")
const add_btn = document.getElementById("add_btn")
const task_list = document.getElementById("task_list")

const remove_input = document.getElementById("remove_input")
const remove_btn = document.getElementById("remove_btn")

add_btn.addEventListener("click",()=>{
    if (add_input.value === "") {
        return
    }
    const list_item = document.createElement("li")
    const textNode = document.createTextNode(add_input.value)
    list_item.appendChild(textNode)
    task_list.appendChild(list_item)
})

remove_btn.addEventListener("click",()=>{
    for(let i = 0;i < task_list.childElementCount;i++){
        if(task_list.childNodes[i].textContent === remove_input.value){
            task_list.childNodes[i].remove()
        }
    }
})