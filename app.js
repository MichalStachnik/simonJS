const one   = document.getElementById('one')
const two   = document.getElementById('two')
const three = document.getElementById('three')
const four  = document.getElementById('four')
const start = document.getElementById('start')

var randomArray= []
for(var i = 0; i < 20; i++){
    randomArray[i] = Math.ceil(Math.random() * 4)
}
var round = 1

start.onclick = function(){
    console.log(randomArray)
    for(var i = 0; i < round; i++){
        switch(randomArray[i]){
            case 1:
                one.classList.toggle('active')
                break
            case 2:
                two.classList.toggle('active')
                break
            case 3:
                three.classList.toggle('active')
                break
            case 4:
                four.classList.toggle('active')
                break
        }
    }
}

