var playerFirstInp = document.querySelector('#playerFirst');
var playerSecondInp = document.querySelector('#playerSecond');

var startGameBtn = document.querySelector('#startGame');

var playerFirstNameBtn = document.querySelector('.playerFirstName');
var playerSecondNameBtn = document.querySelector('.playerSecondName');

var AllGameBoxes = document.querySelectorAll(".game-box");
var GameLogic = undefined;

var WinnerPlayer = document.querySelector(".Winner-Player");

var GameEnd = false;


startGameBtn.addEventListener("click", function() {
    var isValid = checkInputValidation();
    if(isValid){

   playerFirstNameBtn.textContent = playerFirstInp.value;
   playerSecondNameBtn.textContent = playerSecondInp.value;
   GameLogic = true;
    }
});

function checkInputValidation(){
    var isValid = true;
    var inps = document.querySelectorAll(".form-control");
    for(var i = 0; i < inps.length; i++){
        inps[i].addEventListener("click", function(){addDefaultBorder(this)})

        if(!checkSingleInp(inps[i])){
            isValid = false;
        }
    }
    return isValid;
}

function checkSingleInp(inp){
    if(inp.value != "" && inp.value.length > 2)
    {
        return true;
    }

    addBorder(inp)
    return false;
}


function addBorder(elem){
    elem.style.border = "2px solid red";
}


function addDefaultBorder(elem){
    elem.style.border = "2px solid rgb(244, 244, 244)";
}

AllGameBoxes.forEach(o => {
    o.addEventListener("click", function() { 
        if(!GameLogic ){
        if(this.textContent.length != "" &&  GameLogic == undefined){return;}


        if(GameLogic){
            this.textContent = "X";
        }else{
            this.textContent = "0";
        }
        CheckWinner();
        ChangePlayerStatus();
        GameLogic = !GameLogic;
        }
    })
    
});

function CheckWinner(){
    var counter = 0;
    for(var i = 0; i < 2; i++){
        if(AllGameBoxes[i].textContent == AllGameBoxes[i+1].textContent && AllGameBoxes[i].textContent != "")
        {
            counter++
        }
       
    }

    if(counter== 2){
        var Winner = GameLogic ? playerFirstNameBtn.textContent : playerSecondNameBtn.textContent;
        WinnerPlayer.textContent ='The winner is ' + Winner;
        GameEnd = true;
        

    }
    
    
}



function ChangePlayerStatus(){
    playerFirstNameBtn.classList.toggle("active");
    playerSecondNameBtn.classList.toggle("active");
}