let gameData = {
    savedSticks: 0,
    savedStones: 0,
    savedVines: 0,
    savedStickCap: 10,
    savedStoneCap: 10,
    savedVineCap: 10,
    savedAxeLevel: 0,
    savedPickLevel: 0,
    savedSickleLevel: 0
};

let craftingQueue = "";
const moreInfoText1 = document.getElementById("descText1");
const moreInfoText2 = document.getElementById("descText2");
const moreInfoText3 = document.getElementById("descText3");
const moreInfoText4 = document.getElementById("descText4");
const moreInfoText5 = document.getElementById("descText5");

const eventText1 = document.getElementById("eventLogText1");
const eventText2 = document.getElementById("eventLogText2");
const eventText3 = document.getElementById("eventLogText3");
const eventText4 = document.getElementById("eventLogText4");
const eventText5 = document.getElementById("eventLogText5");

let eventArray = ["","","for something!","event log. Try foraging","This is the start of the"];

const stickCostDisplay = document.getElementById("stickCostText");
const stoneCostDisplay = document.getElementById("stoneCostText");
const vineCostDisplay = document.getElementById("vineCostText");

const axeTxt = document.getElementById("axeText");
const pickTxt = document.getElementById("pickText");
const sickleTxt = document.getElementById("sickleText");

const allCraftSelectButtons = document.querySelectorAll('.craftSelectButton');

const gatherButton1 = document.getElementById("gatherBarehand");
gatherButton1.addEventListener("click", function() {
    let rnd = Math.random();  
    if (rnd <= 0.25) {
        if (gameData.savedSticks < gameData.savedStickCap) {
            eventArray.shift();
            eventArray.push("You found a stick.");
            updateEventLog();
            gameData.savedSticks += 1;
            updateResourceDisplay();
        }
        else {
            eventArray.shift();
            eventArray.push("No more stick storage.");
            updateEventLog(); 
        }
    }
    else if (rnd > 0.25 && rnd <= 0.5) {
        if (gameData.savedStones < gameData.savedStoneCap) {
            eventArray.shift();
            eventArray.push("You found a stone.");
            updateEventLog();
            gameData.savedStones += 1;
            updateResourceDisplay();
        }  
        else {
            eventArray.shift();
            eventArray.push("No more stone storage.");
            updateEventLog(); 
        }
    }
    else if (rnd > 0.5 && rnd <= 0.75) {  
        if (gameData.savedVines < gameData.savedVineCap) {
            eventArray.shift();
            eventArray.push("You found a vine.");
            updateEventLog();
            gameData.savedVines += 1;
            updateResourceDisplay();
        }
        else {
            eventArray.shift();
            eventArray.push("No more vine storage.");
            updateEventLog(); 
        }
    }
    else if (rnd > 0.75) { 
        eventArray.shift();
        eventArray.push("You found nothing.");
        updateEventLog(); 
    }
            
    let forageSeconds = 1;
    gatherButton1.disabled = true;
    gatherButton1.style.backgroundColor = 'rgb(36, 61, 61)';
    gatherButton1.style.color = 'white';
    gatherButton1.textContent = "Resting for " + forageSeconds + " sec";
            
    const interval = setInterval(function() {
        forageSeconds--; 
        if (forageSeconds <= 0) {
            gatherButton1.disabled = false;  
            gatherButton1.style.backgroundColor = 'lightblue';
            gatherButton1.style.color = 'black';
            gatherButton1.textContent = "Barehand Forage";
            clearInterval(interval);  
        }
        else {
            gatherButton1.textContent = "Resting for " + forageSeconds + " sec";
        }
    }, 1000); 
});

const axeSelector1 = document.getElementById("selectAxeButton1");
axeSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    axeSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "1 Stick";
    stoneCostDisplay.textContent = "1 Stone";
    vineCostDisplay.textContent = "1 Vine";
    craftingQueue = "makeshiftAxe";
    resetDescriptions();
    moreInfoText1.textContent = "Allows gathering"
    moreInfoText2.textContent = "sticks."
});

const pickSelector1 = document.getElementById("selectPickButton1");
pickSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    pickSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "2 Stick";
    stoneCostDisplay.textContent = "2 Stone";
    vineCostDisplay.textContent = "2 Vine";
    craftingQueue = "makeshiftPick";
    resetDescriptions();
    moreInfoText1.textContent = "Allows gathering"
    moreInfoText2.textContent = "stones."
});

const sickleSelector1 = document.getElementById("selectSickleButton1");
sickleSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    sickleSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "3 Stick";
    stoneCostDisplay.textContent = "3 Stone";
    vineCostDisplay.textContent = "3 Vine";
    craftingQueue = "makeshiftSickle";
    resetDescriptions();
    moreInfoText1.textContent = "Allows gathering"
    moreInfoText2.textContent = "vines."
});

const craftConfirmButton = document.getElementById("craftButtonFINAL");
craftConfirmButton.addEventListener("click", function() {
    if (craftingQueue == "") {
        resetCostText();
        stickCostDisplay.textContent = "Nothing";
        stoneCostDisplay.textContent = "selected!";
    }
    else if (craftingQueue == "makeshiftAxe") {
        if (gameData.savedSticks >= 1 && gameData.savedStones >= 1 && gameData.savedVines >= 1) {
            gameData.savedSticks -= 1;
            gameData.savedStones -= 1;
            gameData.savedVines -= 1;
            gameData.savedAxeLevel = 1;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            axeSelector1.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
        }
    }
    else if (craftingQueue == "makeshiftPick") {
        if (gameData.savedSticks >= 2 && gameData.savedStones >= 2 && gameData.savedVines >= 2) {
            gameData.savedSticks -= 2;
            gameData.savedStones -= 2;
            gameData.savedVines -= 2;
            gameData.savedPickLevel = 1;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            pickSelector1.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
        }
    }
    else if (craftingQueue == "makeshiftSickle") {
        if (gameData.savedSticks >= 3 && gameData.savedStones >= 3 && gameData.savedVines >= 3) {
            gameData.savedSticks -= 3;
            gameData.savedStones -= 3;
            gameData.savedVines -= 3;
            gameData.savedSickleLevel = 1;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            sickleSelector1.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
        }
    }

    updateResourceDisplay();
    updateToolDisplay();
    resetCraftingButtons();
    resetDescriptions();
    craftingQueue = "";
});

function updateEventLog() {
    eventText5.textContent = eventArray[0];
    eventText4.textContent = eventArray[1];
    eventText3.textContent = eventArray[2];
    eventText2.textContent = eventArray[3];
    eventText1.textContent = eventArray[4];
}

function updateResourceDisplay() {
    document.getElementById("stickText").textContent = "Sticks: " + gameData.savedSticks + "/" + gameData.savedStickCap;
    document.getElementById("stoneText").textContent = "Stones: " + gameData.savedStones + "/" + gameData.savedStoneCap;
    document.getElementById("vineText").textContent = "Vines: " + gameData.savedVines + "/" + gameData.savedVineCap;
}

function updateToolDisplay() {
    if (gameData.savedAxeLevel == 1) {
        axeTxt.style.visibility = "visible";
        axeTxt.textContent = "Makeshift Axe";
    }
    if (gameData.savedPickLevel == 1) {
        pickTxt.style.visibility = "visible";
        pickTxt.textContent = "Makeshift Pick";
        if (gameData.savedAxeLevel == 0) {
            axeTxt.style.visibility = "hidden";
        }
    }
    if (gameData.savedSickleLevel == 1) {
        sickleTxt.style.visibility = "visible";
        sickleTxt.textContent = "Makeshift Sickle";
        if (gameData.savedAxeLevel == 0) {
            axeTxt.style.visibility = "hidden";
        }
    }
}

function resetCraftingButtons() {
    allCraftSelectButtons.forEach(function(btn) {
        btn.style.backgroundColor = 'lightblue'; 
      });
}

function resetCostText() {
    stickCostDisplay.textContent = "";
    stoneCostDisplay.textContent = "";
    vineCostDisplay.textContent = "";
}

function resetDescriptions() {
    moreInfoText1.textContent = "";
    moreInfoText2.textContent = "";
    moreInfoText3.textContent = "";
    moreInfoText4.textContent = "";
    moreInfoText5.textContent = "";
}

function initiateSelectorButtons() {
    if (gameData.savedAxeLevel == 1) {
        axeSelector1.remove();
    }
    if (gameData.savedPickLevel == 1) {
        pickSelector1.remove();
    }
    if (gameData.savedSickleLevel == 1) {
        sickleSelector1.remove();
    }
}

/* RESET GAME BUTTON */
document.getElementById("hardResetButton").addEventListener("click", function() {
    let confirmed = window.confirm("Are you sure you want to HARD RESET?");
    if (confirmed) {
        localStorage.removeItem("gameData");
        gameData = {
            savedSticks: 0,
            savedStones: 0,
            savedVines: 0,
            savedStickCap: 10,
            savedStoneCap: 10,
            savedVineCap: 10,
            savedAxeLevel: 0,
            savedPickLevel: 0,
            savedSickleLevel: 0
        };
        saveGame();
        alert("Reset Successful!");
        window.location.reload();
    } else {
        alert("Smart choice.");
    }
});

/* SAVE & LOAD LOGIC */
function saveGame() {
    localStorage.setItem("gameData", JSON.stringify(gameData));
}

function loadGame() {
    const savedGameData = localStorage.getItem("gameData");
    if (savedGameData) {
        gameData = JSON.parse(savedGameData);
        updateResourceDisplay();
        updateToolDisplay();
        initiateSelectorButtons();
        console.log(savedGameData);
    }
}

window.onload = function() {
    loadGame();
};

window.onbeforeunload = function() {
    saveGame();
};