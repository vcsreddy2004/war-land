let redArr = [0,0,0,0,0];
let blueArr = [0,0,0,0,0];
let bgm = new Audio("sound effects/bgm.mp3");
let gunShoot = new Audio("sound effects/gun shoot.mp3");
let root = document.documentElement;
let redDeathCount = 0;
let blueDeathCount = 0;
let chance = "red";
let redDiceRoll = document.querySelector("#redDiceRoll");
let blueDiceRoll = document.querySelector("#blueDiceRoll");
blueDiceRoll.classList.add("opponents-b-disable");
redDiceRoll.addEventListener("click",()=>{
    if(chance == "red")
    {
        let blueSolderSelection;
        bgm.play();
        bgm.loop = true;
        redDiceRoll.value = Math.round(Math.random() * 6);
        let diceValue = redDiceRoll.value;
        diceValue--;
        if(redDeathCount != 5 && blueDeathCount != 5)
        {    
            if(redDiceRoll.value  == 6)
            {
                redDiceRoll.value = 1;
                diceValue = 0;
            }
            else if(redDiceRoll.value == 0)
            {
                redDiceRoll.value = 1;
                diceValue = 0;
            }
            if(redArr[diceValue] == 4)
            {
                switch(diceValue)
                {
                    case 0:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-initial-red" , 50 + "px"); break;
                    case 1:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-initial-red" , 160 + "px"); break;
                    case 2:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-initial-red" , 265 + "px"); break;
                    case 3:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-initial-red" , 375 + "px"); break;
                    case 4:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-initial-red" , 480 + "px"); break;
                }
                blueSolderSelection = prompt("Enter blue solder value to kill");
                if(blueSolderSelection <=5 && blueSolderSelection >=1)
                {
                    blueSolderSelection--;
                    if(blueArr[blueSolderSelection] <= 4)
                    {    
                        switch(blueSolderSelection)
                        {
                            case 0:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-final-red" , 40 + "px"); break;
                            case 1:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-final-red" , 150 + "px"); break;
                            case 2:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-final-red" , 255 + "px"); break;
                            case 3:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-final-red" , 365 + "px"); break;
                            case 4:document.querySelector("#redBullet").style.marginTop = root.style.setProperty("--margin-top-final-red" , 470 + "px"); break;
                        }   
                        document.querySelector("#redBullet").style.width = "20px";
                        document.querySelector("#redBullet").style.animation = "red-bullet 1s";
                        gunShoot.play();
                        setTimeout(()=>{
                            if(blueArr[blueSolderSelection] == 4 || blueArr[blueSolderSelection] == 9)
                            {
                                document.querySelector(`#b${blueSolderSelection}`).src = `images/blue opponent/stage${blueArr[blueSolderSelection] + 5}.png`;
                            }
                            else
                            {
                                document.querySelector(`#b${blueSolderSelection}`).src = `images/blue opponent/stage${blueArr[blueSolderSelection] + 5}.jpg`;
                            }
                            document.querySelector(`#b${blueSolderSelection}`).style.border = "4px solid red";
                            document.querySelector(`#b${blueSolderSelection}`).style.borderLeft = null;
                            document.querySelector("#redBullet").style.width = null;
                            document.querySelector("#redBullet").style.animation = null;
                            blueDeathCount++;
                            blueArr[blueSolderSelection] = blueArr[blueSolderSelection] + 5;
                            shiftChance();
                        }, 1000);
                    }
                    else
                    {
                        alert("he already dead you wasted your bullet");
                        shiftChance();
                    }
                }
                else
                {
                    alert("invalid solder value you have wasted bullet");
                    shiftChance();
                }
            } 
            else
            {
                if(redArr[diceValue] < 4)
                {
                    redArr[diceValue] = redArr[diceValue] + 1;
                }
                if(redArr[diceValue] == 4 || redArr[diceValue] == 9)
                {
                    document.querySelector(`#r${diceValue}`).src = `images/red opponent/stage${redArr[diceValue]}.png`;
                }
                else
                {
                    document.querySelector(`#r${diceValue}`).src = `images/red opponent/stage${redArr[diceValue]}.jpg`;
                }
                shiftChance();
            }
        }
        else
        {
            winnerSelection();
        }
    }
    else
    {
        alert("its blue team to play");
    }
});
blueDiceRoll.addEventListener("click",()=>{
    if(chance == "blue")
    {
        let redSolderSelection = 0;
        blueDiceRoll.value = Math.round(Math.random() * 5);
        let diceValue = blueDiceRoll.value;
        diceValue--;
        if(redDeathCount != 5 && blueDeathCount != 5)
        {
            if(blueDiceRoll.value  == 6)
            {
                blueDiceRoll.value = 1;
                diceValue = 0;
            }
            else if(blueDiceRoll.value == 0)
            {
                blueDiceRoll.value = 1;
                diceValue = 0;
            }
            if(blueArr[diceValue] == 4)
            {
                switch(diceValue)
                {
                    case 0:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-initial-blue" , 40 + "px"); break;
                    case 1:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-initial-blue" , 150 + "px"); break;
                    case 2:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-initial-blue" , 255 + "px"); break;
                    case 3:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-initial-blue" , 365 + "px"); break;
                    case 4:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-initial-blue" , 470 + "px"); break;
                }
                redSolderSelection = prompt("Enter red solder value to kill");
                if(redSolderSelection <=5 && redSolderSelection >=1)
                {
                    redSolderSelection--;
                    if(redArr[redSolderSelection] <= 4)
                    {    
                        switch(redSolderSelection)
                        {
                            case 0:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-final-blue" , 50 + "px"); break;
                            case 1:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-final-blue" , 160 + "px"); break;
                            case 2:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-final-blue" , 265 + "px"); break;
                            case 3:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-final-blue" , 375 + "px"); break;
                            case 4:document.querySelector("#blueBullet").style.marginTop = root.style.setProperty("--margin-top-final-blue" , 480 + "px"); break;
                        }   
                        document.querySelector("#bluebullet").style.width = "20px";
                        document.querySelector("#bluebullet").style.animation = "blue-bullet 1s";
                        gunShoot.play();
                        setTimeout(()=>{
                            if(redArr[redSolderSelection] == 4 || redArr[redSolderSelection] == 9)
                            {
                                document.querySelector(`#r${redSolderSelection}`).src = `images/red opponent/stage${redArr[redSolderSelection] + 5}.png`;
                            }
                            else
                            {
                                document.querySelector(`#r${redSolderSelection}`).src = `images/red opponent/stage${redArr[redSolderSelection] + 5}.jpg`;
                            }
                            document.querySelector(`#r${redSolderSelection}`).style.border = "4px solid red";
                            document.querySelector(`#r${redSolderSelection}`).style.borderRight = null;
                            document.querySelector("#blueBullet").style.width = null;
                            document.querySelector("#blueBullet").style.animation = null;
                            redDeathCount++;
                            redArr[redSolderSelection] = redArr[redSolderSelection] + 5;
                            shiftChance();
                        }, 1000);
                    }
                    else
                    {
                        alert("he already dead you wasted your bullet");
                        shiftChance();
                    }
                }
                else
                {
                    alert("invalid solder value you have wasted bullet");
                    shiftChance();
                }
            }
            else
            {
                if(blueArr[diceValue] < 4)
                {
                    blueArr[diceValue] = blueArr[diceValue] + 1;
                }
                if(blueArr[diceValue] == 4 || blueArr[diceValue] == 9)
                {
                    document.querySelector(`#b${diceValue}`).src = `images/blue opponent/stage${blueArr[diceValue]}.png`;
                }
                else
                {
                    document.querySelector(`#b${diceValue}`).src = `images/blue opponent/stage${blueArr[diceValue]}.jpg`;
                }
                shiftChance();
            }
        }
        else
        {
            winnerSelection();
        }
    }
    else
    {
        alert("Its red team to play");
    }
});
function shiftChance()
{
    if(chance == "red")
    {
        chance = "blue";
        redDiceRoll.classList.add("opponents-r-disable");
        blueDiceRoll.classList.remove("opponents-b-disable");
    }
    else if(chance == "blue")
    {
        chance = "red";
        blueDiceRoll.classList.add("opponents-b-disable");
        redDiceRoll.classList.remove("opponents-r-disable");
    }
}
function winnerSelection()
{
    bgm.pause();
    let winner = document.createElement("h2");
    winner.style.textAlign = "center";
    if(blueDeathCount == 5)
    {
        winner.innerText = "Red king is winner";
        winner.style.color = "darkred";
        winner.style.textShadow = "3px 7px 0px red";
        document.querySelector("#winning").appendChild(winner);
        document.querySelector("#blueKing").src = "images/blue opponent/king defeted.png";
    }
    else
    {
        winner.innerText = "Blue king is winner";
        winner.style.color = "darkblue";
        winner.style.textShadow = "3px 7px 0px blue";
        document.querySelector("#winning").appendChild(winner);
        document.querySelector("#redKing").src = "images/red opponent/king defeted.png";
    }
}