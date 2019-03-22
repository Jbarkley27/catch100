


    let rollDiceButton = document.getElementById('rollButton');
    let firstDice = document.getElementById('firstDice');
    let secondDice = document.getElementById('secondDice');
    let addOneButton = document.getElementById('addOne');
    let score = document.getElementById('score');
    let stepDisplay = document.getElementById('stepDisplay');


    let counter = 0;
    let stepCounter = 0;
    let currentRoll = 0;
   
    
    //ARRAY OF DICE IMAGES
    let images =["placeholder","dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png", ]

    let lastDigit = counter%10;
    //THIS EVENT ROLLS DICE AT RANDOM AND DISPLAYS THEM
    rollDiceButton.addEventListener('click', function(){
       diceChange(firstDice);
       diceChange(secondDice);
       
       score.innerText = counter;
       stepCounter++;
       stepDisplay.innerText=`Steps = ${stepCounter}`;
       counterss(counter);
       
       
    });
   

   addOneButton.addEventListener("click", function(){
       addOne();
       
       
   })
    
   

    //FUNCTION FOR ROLLING THE DICE
    function diceChange(diceNum){
        currentRoll = 0;
        let random = Math.floor((Math.random() * 6) +1);
        diceNum.src = images[random];
        counter = counter + random;
        currentRoll = currentRoll + random;
        
        
        score.innerText = counter;
        

        
    }
    
    
    function addOne(){
        counter++;
        counterss();
        score.innerText = counter;
        stepCounter++;
        stepDisplay.innerText=`Steps = ${stepCounter}`;
    }
    
    function counterss(){
        if(counter > 100){
           counter = counter - 100;
           score.innerText = counter;
            
        } else if (lastDigit === 5) {
            counter = counter + 5;
            score.innerText = counter;
        } else if (counter % 13 === 0) {
            counter = currentRoll * 2 + counter;
            score.innerText = counter;
        }
        
    }