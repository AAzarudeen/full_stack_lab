const input = document.getElementById("input")
        const exclusion = document.getElementById("exclusion")
        const strengthen = document.getElementById("strengthen")
        const emphasize = document.getElementById("emphasize")
        const result = document.getElementById("result")
        input.addEventListener('keyup',()=>{
            result.innerText = input.value
        })

        function addPrefix(prefix) {
            if (input.value.length != 0) {
                result.innerText = prefix+input.value
            }
        }