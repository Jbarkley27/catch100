


    let rollDiceButton = document.getElementsByClassName("diceRoll");
    let firstDice = document.getElementsByClassName('firstDice');
    let secondDice = document.getElementsByClassName('secondDice');
    
    
    
    
    
    rollDiceButton.addEventListener("click", function(){
        alert("Hey");
    });

    function diceChange(diceroll){
        let random = Math.floor((Math.random() * 6) + 1);
        diceroll.src =`image ${random}.png`;
    }
    
    

    
    