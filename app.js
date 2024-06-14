
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let dice6 = document.getElementById("dice6");



function roll(){
    
    let rolledNumber = Math.floor(Math.random()*6)+1;
    
    console.log(`you rolled number is ${rolledNumber}`);

        if(rolledNumber == 1){

            hideall();
            dice1.style.display = "block";
        
        }
        else if(rolledNumber == 2){
            
            hideall();
            dice2.style.display = "block";

        }
        else if(rolledNumber == 3){
            
            hideall();
            dice3.style.display = "block";

        }
        else if(rolledNumber == 4){
            
            hideall();
            dice4.style.display = "block";

        }
        else if(rolledNumber == 5){
            
            hideall();
            dice5.style.display = "block";

        }
        else if(rolledNumber == 6){
            
            hideall();
            dice6.style.display = "block";

        }
    
    }

    function hideall(){
        
        dice1.style.display = "none"
        dice2.style.display = "none"
        dice3.style.display = "none"
        dice4.style.display = "none"
        dice5.style.display = "none"
        dice6.style.display = "none"

    }
