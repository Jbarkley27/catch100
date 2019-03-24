


    let rollDiceButton = document.getElementById('rollButton');
    let firstDice = document.getElementById('firstDice');
    let secondDice = document.getElementById('secondDice');
    let addOneButton = document.getElementById('addOne');
    let score = document.getElementById('score');
    let stepDisplay = document.getElementById('stepDisplay');
    let resetButton = document.getElementById('reset');

    let ruleOne1 = document.getElementById('rule1');
    let ruleTwo2 = document.getElementById('rule2');
    let ruleThree3 = document.getElementById('rule3');

    let counter = 0;
    let stepCounter = 0;
    let currentRoll = 0;
   
    let lastDigit;
    let lastDigit2;
    //ARRAY OF DICE IMAGES
    let images =["placeholder","dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png", ]

    

    //THIS EVENT ROLLS DICE AT RANDOM AND DISPLAYS THEM
    rollDiceButton.addEventListener('click', function(){
       diceChange();
       stepCounter++;
       stepDisplay.innerText=`Steps = ${stepCounter}`;
       
       
       
       
    });
   

   addOneButton.addEventListener("click", function(){
       addOne();

  });
    
   resetButton.addEventListener("click", reset);


  function removeBoldRules(){
    ruleOne1.classList.remove('boldText');
    ruleTwo2.classList.remove('boldText');
    ruleThree3.classList.remove('boldText');
  }




    //FUNCTION FOR ROLLING THE DICE
    function diceChange(){

        removeBoldRules();
        let diceAddition = 0;
        
        let random = Math.floor((Math.random() * 6) +1);
        diceAddition += random;
        firstDice.src = images[random];

        let random2 = Math.floor((Math.random() * 6) +1);
        diceAddition += random2;
        secondDice.src = images[random2];

        counter +=diceAddition;
        lastDigit = counter%10;

        if(counter > 100){
            counter = counter - 100;
            score.innerText = counter;
            ruleThree3.classList.add('boldText');
            

             
         } else if (lastDigit === 5) {
             counter = counter + 5;
             score.innerText = counter;
             ruleOne1.classList.add('boldText');
             
 
         } else if (counter % 13 === 0) {
             counter -= diceAddition *2;
             score.innerText = counter ;
             ruleTwo2.classList.add('boldText');
             
         } else {
            score.innerText = counter;
         }

        testForWin(counter);
        
        
        
        diceAddition = 0;
        lastDigit = 0;
        
    }
    
    //ADD ONE BUTTON
    function addOne(){
        counter++;
        removeBoldRules();
        
        lastDigit2 = counter%10;
        if(counter > 100){
            counter = counter - 100;
            score.innerText = counter;
            ruleThree3.classList.add('boldText');
             
         } else if (lastDigit2 === 5) {
             counter = counter + 5;
             score.innerText = counter;
             ruleOne1.classList.add('boldText');
 
         } else if (counter % 13 === 0) {
             counter -= 2 ;
             score.innerText = counter ;
             ruleTwo2.classList.add('boldText');
         } else {
            score.innerText = counter;
            
         }

         score.innerText = counter;

         testForWin(counter);

        lastDigit2 = 0;

        
        stepCounter++;
        stepDisplay.innerText=`Steps = ${stepCounter}`;
        currentRoll = 0;
    }
    
    //LOGIC OF GAME SCORING
    //
    

    //RESETS GAME SCORE
    function reset (){
        counter = 0;
        score.innerText = 0;
        stepCounter = 0;
        stepDisplay.innerText=`Steps = 0`;
        currentRoll = 0;

        removeBoldRules();

        firstDice.src = images[1];
        secondDice.src = images[1];

        addOneButton.classList.remove('hide');
        rollDiceButton.classList.remove('hide');
    }

    function testForWin(num){
        if(num === 100) {
            score.innerText = 'YOU WIN!!';
            addOneButton.classList.add('hide');
            rollDiceButton.classList.add('hide');
    }
}