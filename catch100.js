


    let rollDiceButton = document.getElementById('mee');
    let firstDice = document.getElementById('firstDice');
    let secondDice = document.getElementsByClassName('secondDice');
    
    let images =["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png", ]



    function roll() {
        alert("Hey");
    }
    
    
    rollDiceButton.addEventListener('click', function(){
        let random = Math.floor((Math.random() * 5) );
        firstDice.src = images[random];
        secondDice.src = images[random];
        
    });

    
    


    function diceChange(diceroll){
        let random = Math.floor((Math.random() * 6) + 1);
        diceroll.src =`image ${random}.png`;
    }
    
    

    
    