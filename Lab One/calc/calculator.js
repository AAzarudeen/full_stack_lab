const input_box = document.getElementById("input_box")
function input_fun(number) {
    var symbol = ['+','-','*','/']
    var str = input_box.textContent
    if(number == 0 && str == "")
        return
    if(str == "" &&  symbol.includes(number)){
        return
    }
    if(symbol.includes(str[str.length-1]) && symbol.includes(number)){
        if(str[str.length-1] != number){
            input_box.textContent = (str.slice(0,str.length-1)+number)
        }
        return
    }
    input_box.textContent += number
}

function all_clear() {
    input_box.textContent = ""
}

function back_space() {
    input_box.textContent = input_box.textContent.slice(0,-1)
}

function evaluate_ex() {
    input_box.textContent = math.evaluate(input_box.textContent)
}

function squr(){
    input_box.textContent = input_box.textContent * input_box.textContent
}

function cube(){
    input_box.textContent = input_box.textContent * input_box.textContent * input_box.textContent 
}

function squrt(){
    input_box.textContent = math.sqrt(input_box.textContent)
}