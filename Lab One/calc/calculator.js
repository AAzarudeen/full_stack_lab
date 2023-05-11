const input_box = document.getElementById("input_box")

function input_fun(number) {
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