


    let rollDiceButton = document.getElementById('mee');
    let firstDice = document.getElementById('firstDice');
    let secondDice = document.getElementById('secondDice');
    
    let images =["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png", ]



    function roll() {
        alert("Hey");
    }
    
    
    rollDiceButton.addEventListener('click', function(){
       diceChange(firstDice);
       diceChange(secondDice);
        
    });

    
    


    function diceChange(diceNum){
        let random = Math.floor((Math.random() * 5) );
        diceNum.src = images[random];
        
    }
    
    

    
    