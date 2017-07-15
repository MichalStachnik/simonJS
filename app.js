const one   = document.getElementById('one')
const two   = document.getElementById('two')
const three = document.getElementById('three')
const four  = document.getElementById('four')
const start = document.getElementById('start')

var randomArray= []
var playerArray = []
for(var i = 0; i < 20; i++){
    randomArray[i] = Math.ceil(Math.random() * 4)
}
one.onclick = function(){
    playerArray.push(1)
    one.classList.toggle('active')
    setTimeout(function(){one.classList.toggle('active')}, 800)
    console.log(playerArray)
}
two.onclick = function(){
    playerArray.push(2)
    two.classList.toggle('active')
    setTimeout(function(){two.classList.toggle('active')}, 800)
    console.log(playerArray)
}
three.onclick = function(){
    playerArray.push(3)
    three.classList.toggle('active')
    setTimeout(function(){three.classList.toggle('active')}, 800)
    console.log(playerArray)
}
four.onclick = function(){
    playerArray.push(4)
    four.classList.toggle('active')
    setTimeout(function(){four.classList.toggle('active')}, 800)
    console.log(playerArray)
}
computerTurn = function(currentRound){
    playerArray = []
    var flashInterval = setInterval(flashFunction, 1000)
    var i = 0
    function flashFunction(){
        if(i < currentRound){
            switch(randomArray[i]){
                case 1:
                    one.classList.toggle('active')
                    setTimeout(function(){one.classList.toggle('active')}, 800)
                    break
                case 2:
                    two.classList.toggle('active')
                    setTimeout(function(){two.classList.toggle('active')}, 800)
                    break
                case 3:
                    three.classList.toggle('active')
                    setTimeout(function(){three.classList.toggle('active')}, 800)
                    break
                case 4:
                    four.classList.toggle('active')
                    setTimeout(function(){four.classList.toggle('active')}, 800)
                    break
            }
        }
        i++
    }
    playerTurn(currentRound)
}
playerTurn = function(currentRound){
    playerArray = []
    var isSame
    var checking = setInterval(checkInput, 1000)
    function checkInput(){
        if(playerArray.length != currentRound){
            console.log('waiting for more input')
        }
        else{
            console.log('checking input')
            for(var i = 0; i < currentRound; i++){
                if(playerArray[i] === randomArray[i]){
                    console.log('same', playerArray[i], randomArray[i])
                    console.log('should go to next round')
                    clearInterval(checking)
                    currentRound++
                    computerTurn(currentRound)
                }
                else{
                    console.log('should repeat this round')
                    return currentRound
                }
            }
        }
    }
}
start.onclick = function(){
    var round = 1
    console.log(randomArray)
    computerTurn(round)
}
