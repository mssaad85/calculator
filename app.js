function getNum(num) {
    console.log(num)
    var inp = document.getElementById("result")
    inp.value += num
}


function clearval() {
    var inp = document.getElementById("result")
    inp.value = ""
    
}
function  getresult(){
    var inp = document.getElementById("result")
    inp.value =eval(inp.value)
}
    