const dateAndTime = document.getElementById("date")

const year = document.getElementById("year")

const list_items = document.getElementsByTagName('li')

var hue = 0;

var hueTime = 0;

var time = 0;

setInterval(()=>{
    
    var date = new Date()
    
    dateAndTime.innerText = date.toLocaleTimeString()
    
    hueTime = hueTime + Math.random() * 3000

    dateAndTime.style.background = 'hsl(' + hueTime + ', 100%, 50%)'
    dateAndTime.style.margin = '10px'
    dateAndTime.style.padding = '10px'
    dateAndTime.style.fontFamily = 'Tahoma'
    dateAndTime.style.fontSize = '20px'
    dateAndTime.style.width = '250px'

    time += 1000;
    
    if(time === 3000){
        time = 0
        hue = hue + Math.random() * 3000
        year.style.color = 'hsl(' + hue + ', 100%, 50%)'
    }

},1000)

for (let i = 0; i < list_items.length; i++) {
    
    list_items[i].style.margin = '10px'
    list_items[i].style.padding = '10px'
    list_items[i].style.fontFamily = 'Tahoma'
    list_items[i].style.fontSize = '20px'
    list_items[i].style.width = '250px'
    
    if(i < 3){

        list_items[i].style.backgroundColor = "green"
        continue;
    
    }
    
    if(i < 5 && i >= 3){

        list_items[i].style.backgroundColor = "yellow"
        continue;
    
    }
    
    if(i < 7 && i >= 5){

        list_items[i].style.backgroundColor = "red"
        continue;
    
    }
}