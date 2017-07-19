const one   = document.getElementById('one')
const two   = document.getElementById('two')
const three = document.getElementById('three')
const four  = document.getElementById('four')
const start = document.getElementById('start')
const strict = document.getElementById('strict')
const restart = document.getElementById('restart')
const roundSpan = document.getElementById('round')
const sound1 = document.getElementById('sound1')
const sound2 = document.getElementById('sound2')
const sound3 = document.getElementById('sound3')
const sound4 = document.getElementById('sound4')

var randomArray= []
var playerArray = []
var isStrict = false
makeRandomArray = function(){
    for(var i = 0; i < 20; i++){
    randomArray[i] = Math.ceil(Math.random() * 4)
    }
}
makeRandomArray()
restart.onclick = function(){
    round = 1
    playerArray = []
    roundSpan.innerHTML = 'Round: 0'
}
strict.onclick = function(){
    isStrict = !isStrict
    console.log(isStrict)
}
one.onclick = function(){
    playerArray.push(1)
    one.classList.toggle('active')
    sound1.play()
    setTimeout(function(){one.classList.toggle('active')}, 800)
    console.log(playerArray)
}
two.onclick = function(){
    playerArray.push(2)
    two.classList.toggle('active')
    sound2.play()
    setTimeout(function(){two.classList.toggle('active')}, 800)
    console.log(playerArray)
}
three.onclick = function(){
    playerArray.push(3)
    three.classList.toggle('active')
    sound3.play()
    setTimeout(function(){three.classList.toggle('active')}, 800)
    console.log(playerArray)
}
four.onclick = function(){
    playerArray.push(4)
    four.classList.toggle('active')
    sound4.play()
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
                    sound1.play()
                    setTimeout(function(){one.classList.toggle('active')}, 800)
                    break
                case 2:
                    two.classList.toggle('active')
                    sound2.play()
                    setTimeout(function(){two.classList.toggle('active')}, 800)
                    break
                case 3:
                    three.classList.toggle('active')
                    sound3.play()
                    setTimeout(function(){three.classList.toggle('active')}, 800)
                    break
                case 4:
                    four.classList.toggle('active')
                    sound4.play()
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
                    isSame = true
                }
                else{
                    console.log('not the same', playerArray[i], randomArray[i])
                    isSame = false
                }
            }
            if(isSame){
                console.log('should go to next round')
                clearInterval(checking)
                currentRound++
                roundSpan.innerHTML = `Round: ${currentRound}`
                computerTurn(currentRound)
            }
            else{
                if(isStrict){
                    console.log('in strict mode should restart')
                    clearInterval(checking)
                    round = 1
                    playerArray = []
                    roundSpan.innerHTML = 'Round: 1'
                    makeRandomArray()
                    computerTurn(round)
                }
                else{
                    console.log('we should repeat round')
                    clearInterval(checking)
                    computerTurn(currentRound)
                }
            }
        }
    }
}
start.onclick = function(){
    var round = 1
    roundSpan.innerHTML = `Round: ${round}`
    console.log(randomArray)
    computerTurn(round)
}
