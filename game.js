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

const gatherButtonBarehand = document.getElementById("gatherBarehand");
const gatherButtonSticks = document.getElementById("gatherSticks");
const gatherButtonStones = document.getElementById("gatherStones");
const gatherButtonVines = document.getElementById("gatherVines");
gatherButtonBarehand.addEventListener("click", function() {
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
    gatherButtonBarehand.disabled = true;
    gatherButtonBarehand.style.backgroundColor = 'rgb(36, 61, 61)';
    gatherButtonBarehand.style.color = 'white';
    gatherButtonBarehand.textContent = "Resting for " + forageSeconds + " sec";
            
    const interval = setInterval(function() {
        forageSeconds--; 
        if (forageSeconds <= 0) {
            gatherButtonBarehand.disabled = false;  
            gatherButtonBarehand.style.backgroundColor = 'lightblue';
            gatherButtonBarehand.style.color = 'black';
            gatherButtonBarehand.textContent = "Barehand Forage";
            clearInterval(interval);  
        }
        else {
            gatherButtonBarehand.textContent = "Resting for " + forageSeconds + " sec";
        }
    }, 1000); 
});
gatherButtonSticks.addEventListener("click", function() {
    if (gameData.savedSticks < gameData.savedStickCap) {
        if (gameData.savedAxeLevel == 1) {
            gameData.savedSticks += 1;
            eventArray.shift();
            eventArray.push("You found a stick.");
            updateEventLog(); 
            updateResourceDisplay();
        }
        else if (gameData.savedAxeLevel == 2) {
            let num = gameData.savedStickCap - gameData.savedSticks;
            let dif = Math.min(2, num);
            gameData.savedSticks += dif;
            eventArray.shift();
            eventArray.push("You found "+dif+" sticks.");
            updateEventLog(); 
            updateResourceDisplay();
        }
    }
    else {
        eventArray.shift();
        eventArray.push("No more stick storage.");
        updateEventLog(); 
    }
    
    let stickSeconds = 3;
    gatherButtonSticks.disabled = true;
    gatherButtonSticks.style.backgroundColor = 'rgb(36, 61, 61)';
    gatherButtonSticks.style.color = 'white';
    gatherButtonSticks.textContent = "Resting for " + stickSeconds + " sec";
            
    const interval = setInterval(function() {
        stickSeconds--; 
        if (stickSeconds <= 0) {
            gatherButtonSticks.disabled = false;  
            gatherButtonSticks.style.backgroundColor = 'lightblue';
            gatherButtonSticks.style.color = 'black';
            gatherButtonSticks.textContent = "Gather Sticks";
            clearInterval(interval);  
        }
        else {
            gatherButtonSticks.textContent = "Resting for " + stickSeconds + " sec";
        }
    }, 1000); 
});
gatherButtonStones.addEventListener("click", function() {
    if (gameData.savedStones < gameData.savedStoneCap) {
        if (gameData.savedPickLevel == 1) {
            gameData.savedStones += 1;
            eventArray.shift();
            eventArray.push("You found a stone.");
            updateEventLog(); 
            updateResourceDisplay();
        }
        else if (gameData.savedPickLevel == 2) {
            let num = gameData.savedStoneCap - gameData.savedStones;
            let dif = Math.min(2, num);
            gameData.savedStones += dif;
            eventArray.shift();
            eventArray.push("You found "+dif+" stones.");
            updateEventLog(); 
            updateResourceDisplay();
        }
    }
    else {
        eventArray.shift();
        eventArray.push("No more stone storage.");
        updateEventLog(); 
    }
    
    let stoneSeconds = 3;
    gatherButtonStones.disabled = true;
    gatherButtonStones.style.backgroundColor = 'rgb(36, 61, 61)';
    gatherButtonStones.style.color = 'white';
    gatherButtonStones.textContent = "Resting for " + stoneSeconds + " sec";
            
    const interval = setInterval(function() {
        stoneSeconds--; 
        if (stoneSeconds <= 0) {
            gatherButtonStones.disabled = false;  
            gatherButtonStones.style.backgroundColor = 'lightblue';
            gatherButtonStones.style.color = 'black';
            gatherButtonStones.textContent = "Gather Stones";
            clearInterval(interval);  
        }
        else {
            gatherButtonStones.textContent = "Resting for " + stoneSeconds + " sec";
        }
    }, 1000); 
});
gatherButtonVines.addEventListener("click", function() {
    if (gameData.savedVines < gameData.savedVineCap) {
        if (gameData.savedSickleLevel == 1) {
            gameData.savedVines += 1;
            eventArray.shift();
            eventArray.push("You found a vine.");
            updateEventLog(); 
            updateResourceDisplay();
        }
        else if (gameData.savedSickleLevel == 2) {
            let num = gameData.savedVineCap - gameData.savedVines;
            let dif = Math.min(2, num);
            gameData.savedVines += dif;
            eventArray.shift();
            eventArray.push("You found "+dif+" vines.");
            updateEventLog(); 
            updateResourceDisplay();
        }
    }
    else {
        eventArray.shift();
        eventArray.push("No more vine storage.");
        updateEventLog(); 
    }
    
    let vineSeconds = 3;
    gatherButtonVines.disabled = true;
    gatherButtonVines.style.backgroundColor = 'rgb(36, 61, 61)';
    gatherButtonVines.style.color = 'white';
    gatherButtonVines.textContent = "Resting for " + vineSeconds + " sec";
            
    const interval = setInterval(function() {
        vineSeconds--; 
        if (vineSeconds <= 0) {
            gatherButtonVines.disabled = false;  
            gatherButtonVines.style.backgroundColor = 'lightblue';
            gatherButtonVines.style.color = 'black';
            gatherButtonVines.textContent = "Gather Vines";
            clearInterval(interval);  
        }
        else {
            gatherButtonVines.textContent = "Resting for " + vineSeconds + " sec";
        }
    }, 1000); 
});

const axeSelector1 = document.getElementById("selectAxeButton1");
const axeSelector2 = document.getElementById("selectAxeButton2");
axeSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    axeSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "1 Stick";
    stoneCostDisplay.textContent = "1 Stone";
    vineCostDisplay.textContent = "1 Vine";
    stickCostDisplay.style.visibility = "visible";
    stoneCostDisplay.style.visibility = "visible";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "makeshiftAxe";
    resetDescriptions();
    moreInfoText1.textContent = "Allows gathering"
    moreInfoText2.textContent = "sticks."
});
axeSelector2.addEventListener("click", function() {
    resetCraftingButtons();
    axeSelector2.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "1 Stick";
    stoneCostDisplay.textContent = "2 Stones";
    vineCostDisplay.textContent = "3 Vines";
    stickCostDisplay.style.visibility = "visible";
    stoneCostDisplay.style.visibility = "visible";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "sturdyAxe";
    resetDescriptions();
    moreInfoText1.textContent = "Allows you to"
    moreInfoText2.textContent = "gather an extra"
    moreInfoText3.textContent = "Stick."
});

const pickSelector1 = document.getElementById("selectPickButton1");
const pickSelector2 = document.getElementById("selectPickButton2");
pickSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    pickSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "2 Stick";
    stoneCostDisplay.textContent = "2 Stone";
    vineCostDisplay.textContent = "2 Vine";
    stickCostDisplay.style.visibility = "visible";
    stoneCostDisplay.style.visibility = "visible";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "makeshiftPick";
    resetDescriptions();
    moreInfoText1.textContent = "Allows gathering"
    moreInfoText2.textContent = "stones."
});
pickSelector2.addEventListener("click", function() {
    resetCraftingButtons();
    pickSelector2.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "3 Stick";
    stoneCostDisplay.textContent = "2 Stones";
    vineCostDisplay.textContent = "1 Vines";
    stickCostDisplay.style.visibility = "visible";
    stoneCostDisplay.style.visibility = "visible";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "sturdyPick";
    resetDescriptions();
    moreInfoText1.textContent = "Allows you to"
    moreInfoText2.textContent = "gather an extra"
    moreInfoText3.textContent = "Stone."
});

const sickleSelector1 = document.getElementById("selectSickleButton1");
const sickleSelector2 = document.getElementById("selectSickleButton2");
sickleSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    sickleSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "3 Stick";
    stoneCostDisplay.textContent = "3 Stone";
    vineCostDisplay.textContent = "3 Vine";
    stickCostDisplay.style.visibility = "visible";
    stoneCostDisplay.style.visibility = "visible";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "makeshiftSickle";
    resetDescriptions();
    moreInfoText1.textContent = "Allows gathering"
    moreInfoText2.textContent = "vines."
});
sickleSelector2.addEventListener("click", function() {
    resetCraftingButtons();
    sickleSelector2.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "4 Stick";
    stoneCostDisplay.textContent = "4 Stones";
    vineCostDisplay.textContent = "4 Vines";
    stickCostDisplay.style.visibility = "visible";
    stoneCostDisplay.style.visibility = "visible";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "sturdySickle";
    resetDescriptions();
    moreInfoText1.textContent = "Allows you to"
    moreInfoText2.textContent = "gather an extra"
    moreInfoText3.textContent = "Vine."
});

const stickCapUpgradeSelector1 = document.getElementById("selectStickStorageButton1");
const stoneCapUpgradeSelector1 = document.getElementById("selectStoneStorageButton1");
const vineCapUpgradeSelector1 = document.getElementById("selectVineStorageButton1");
stickCapUpgradeSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    stickCapUpgradeSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stickCostDisplay.textContent = "10 Sticks";
    stickCostDisplay.style.visibility = "visible";
    craftingQueue = "stickCap1";
    resetDescriptions();
    moreInfoText1.textContent = "Increases Stick"
    moreInfoText2.textContent = "cap by 10."
});
stoneCapUpgradeSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    stoneCapUpgradeSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    stoneCostDisplay.textContent = "10 Stones";
    stoneCostDisplay.style.visibility = "visible";
    craftingQueue = "stoneCap1";
    resetDescriptions();
    moreInfoText1.textContent = "Increases Stone"
    moreInfoText2.textContent = "cap by 10."
});
vineCapUpgradeSelector1.addEventListener("click", function() {
    resetCraftingButtons();
    vineCapUpgradeSelector1.style.backgroundColor = 'lightskyblue';
    resetCostText();
    vineCostDisplay.textContent = "10 Vines";
    vineCostDisplay.style.visibility = "visible";
    craftingQueue = "vineCap1";
    resetDescriptions();
    moreInfoText1.textContent = "Increases Vine"
    moreInfoText2.textContent = "cap by 10."
});

const craftConfirmButton = document.getElementById("craftButtonFINAL");
craftConfirmButton.addEventListener("click", function() {
    if (craftingQueue == "") {
        resetCostText();
        stickCostDisplay.textContent = "Nothing";
        stoneCostDisplay.textContent = "selected!";
        stickCostDisplay.style.visibility = "visible";
        stoneCostDisplay.style.visibility = "visible";
    }
    else if (craftingQueue == "makeshiftAxe") {
        if (gameData.savedSticks >= 1 && gameData.savedStones >= 1 && gameData.savedVines >= 1) {
            gameData.savedSticks -= 1;
            gameData.savedStones -= 1;
            gameData.savedVines -= 1;
            gameData.savedAxeLevel = 1;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            axeSelector1.remove();
            gatherButtonSticks.style.display = "block";
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
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
            stickCostDisplay.style.visibility = "visible";
            pickSelector1.remove();
            gatherButtonStones.style.display = "block";
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
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
            stickCostDisplay.style.visibility = "visible";
            sickleSelector1.remove();
            gatherButtonVines.style.display = "block";
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }
    else if (craftingQueue == "sturdyAxe") {
        if (gameData.savedSticks >= 1 && gameData.savedStones >= 2 && gameData.savedVines >= 3) {
            gameData.savedSticks -= 1;
            gameData.savedStones -= 2;
            gameData.savedVines -= 3;
            gameData.savedAxeLevel = 2;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            axeSelector2.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }
    else if (craftingQueue == "sturdyPick") {
        if (gameData.savedSticks >= 3 && gameData.savedStones >= 2 && gameData.savedVines >= 1) {
            gameData.savedSticks -= 3;
            gameData.savedStones -= 2;
            gameData.savedVines -= 1;
            gameData.savedPickLevel = 2;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            pickSelector2.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }
    else if (craftingQueue == "sturdySickle") {
        if (gameData.savedSticks >= 4 && gameData.savedStones >= 4 && gameData.savedVines >= 4) {
            gameData.savedSticks -= 4;
            gameData.savedStones -= 4;
            gameData.savedVines -= 4;
            gameData.savedSickleLevel = 2;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            sickleSelector2.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }
    else if (craftingQueue == "stickCap1") {
        if (gameData.savedSticks >= 10) {
            gameData.savedSticks -= 10;
            gameData.savedStickCap += 10;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            stickCapUpgradeSelector1.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }
    else if (craftingQueue == "stoneCap1") {
        if (gameData.savedStones >= 10) {
            gameData.savedStones -= 10;
            gameData.savedStoneCap += 10;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            stoneCapUpgradeSelector1.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }
    else if (craftingQueue == "vineCap1") {
        if (gameData.savedVines >= 10) {
            gameData.savedVines -= 10;
            gameData.savedVineCap += 10;
            resetCostText();
            stickCostDisplay.textContent = "Crafted!";
            stickCostDisplay.style.visibility = "visible";
            vineCapUpgradeSelector1.remove();
        }
        else {
            resetCostText();
            stickCostDisplay.textContent = "Can't afford!";
            stickCostDisplay.style.visibility = "visible";
        }
    }

    updateResourceDisplay();
    updateToolDisplay();
    resetCraftingButtons();
    resetDescriptions();
    checkForNewCrafts();
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
    if (gameData.savedAxeLevel == 2) {
        axeTxt.textContent = "Sturdy Axe";
        axeTxt.style.visibility = "visible";
    }
    if (gameData.savedPickLevel == 2) {
        pickTxt.textContent = "Sturdy Pick";
        pickTxt.style.visibility = "visible";
    }
    if (gameData.savedSickleLevel == 2) {
        sickleTxt.textContent = "Sturdy Sickle";
        sickleTxt.style.visibility = "visible";
    }
}

function resetCraftingButtons() {
    allCraftSelectButtons.forEach(function(btn) {
        btn.style.backgroundColor = 'lightblue'; 
      });
}

function resetCostText() {
    stickCostDisplay.textContent = "none";
    stoneCostDisplay.textContent = "none";
    vineCostDisplay.textContent = "none";
    stickCostDisplay.style.visibility = "hidden";
    stoneCostDisplay.style.visibility = "hidden";
    vineCostDisplay.style.visibility = "hidden";
}

function resetDescriptions() {
    moreInfoText1.textContent = "";
    moreInfoText2.textContent = "";
    moreInfoText3.textContent = "";
    moreInfoText4.textContent = "";
    moreInfoText5.textContent = "";
}

function checkForNewCrafts() {
    if (gameData.savedAxeLevel >= 1 && gameData.savedPickLevel >= 1 && gameData.savedSickleLevel >= 1) {
        axeSelector2.style.display = "block";
        pickSelector2.style.display = "block";
        sickleSelector2.style.display = "block";
        stickCapUpgradeSelector1.style.display = "block";
        stoneCapUpgradeSelector1.style.display = "block";
        vineCapUpgradeSelector1.style.display = "block";
    }
}

function initiateSelectorButtons() {
    checkForNewCrafts();
    if (gameData.savedAxeLevel >= 1) {
        axeSelector1.remove();
    }
    if (gameData.savedAxeLevel >= 2) {
        axeSelector2.remove();
    }
    if (gameData.savedPickLevel >= 1) {
        pickSelector1.remove();
    }
    if (gameData.savedPickLevel >= 2) {
        pickSelector2.remove();
    }
    if (gameData.savedSickleLevel >= 1) {
        sickleSelector1.remove();
    }
    if (gameData.savedSickleLevel >= 2) {
        sickleSelector2.remove();
    }
    if (gameData.savedStickCap >= 20) {
        stickCapUpgradeSelector1.remove();
    }
    if (gameData.savedStoneCap >= 20) {
        stoneCapUpgradeSelector1.remove();
    }
    if (gameData.savedVineCap >= 20) {
        vineCapUpgradeSelector1.remove();
    }
    if (gameData.savedAxeLevel > 0) {
        gatherButtonSticks.style.display = "block";
    }
    if (gameData.savedPickLevel > 0) {
        gatherButtonStones.style.display = "block";
    }
    if (gameData.savedSickleLevel > 0) {
        gatherButtonVines.style.display = "block";
    }
}

/* Collection and Changelog Viewer */
var collectionMdl = document.getElementById("collectionModal");
var changelogMdl = document.getElementById("changelogModal");

var collectionBtn = document.getElementById("collectionViewButton");
var changelogBtn = document.getElementById("openChangelog");

var closeCollectionBtn = document.getElementsByClassName("closeCollection")[0];
var closeChangelogBtn = document.getElementsByClassName("closeChangelog")[0];

collectionBtn.onclick = function() {
    collectionMdl.style.display = "flex";
}
changelogBtn.onclick = function() {
    changelogMdl.style.display = "flex";
}

closeCollectionBtn.onclick = function() {
    collectionMdl.style.display = "none";
}
closeChangelogBtn.onclick = function() {
    changelogMdl.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == collectionMdl) {
    collectionMdl.style.display = "none";
  }
  if (event.target == changelogMdl) {
    changelogMdl.style.display = "none";
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