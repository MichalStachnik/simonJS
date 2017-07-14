const one   = document.getElementById('one')
const two   = document.getElementById('two')
const three = document.getElementById('three')
const four  = document.getElementById('four')
const start = document.getElementById('start')

var randomArray= []
var playerArray = []
var isPlaying = false
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
    for(var i = 0; i < currentRound; i++){
        console.log('what we should be flashing', randomArray[i])
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
}

// playerTurn = function()
start.onclick = function(){
    var round = 2
    playerArray = []
    console.log('round', round)
    console.log(randomArray)
    computerTurn(round)
    
    var checking = setInterval(checkInput, 1000)

    function checkInput(){
        if(playerArray.length != round){
            console.log('waiting for more input')
        }
        else{
            console.log('checking input')
            var isSame
            for(var i = 0; i < round; i++){
                if(playerArray[i] === randomArray[i]){
                    console.log('same', playerArray[i], randomArray[i])
                }
                else{
                    isSame = false
                }
            }
            if(isSame){
                console.log('we should go to next round')
            }
            else{
                console.log('something wrong')
            }
        }
    }
}

