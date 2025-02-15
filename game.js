function changeContent(sectionId, button) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none'; 
    });

    const activeContent = document.getElementById(sectionId);
    activeContent.classList.add('active');
    activeContent.style.display = 'grid';

    const buttons = document.querySelectorAll('#left-section button');
    buttons.forEach(btn => btn.classList.remove('active-btn'));
    button.classList.add('active-btn');
    if (sectionId == "content2") {
        updateForgeTxt();
    }
}

let isResetting = false;
let eventLogTxt = ["","","","","","","","","",""];
let miningData = {
    Tin: 0,
    Copper: 0,
    Zinc: 0,
    Nickel: 0,
    Lead: 0,
    Cobalt: 0,
    Titanium: 0,
    Tungsten: 0,
    Silver: 0,
    Gold: 0,
    Platinum: 0,
    Iridium: 0,
    Agate: 0,
    Peridot: 0,
    Malachite: 0,
    Amber: 0,
    Garnet: 0,
    Aquamarine: 0,
    Topaz: 0,
    Amethyst: 0,
    Sapphire: 0,
    Ruby: 0,
    Emerald: 0,
    Diamond: 0
};
let miningExpData = {
    Tin: 5,
    Copper: 10,
    Zinc: 15,
    Nickel: 20,
    Lead: 30,
    Cobalt: 40,
    Titanium: 50,
    Tungsten: 60,
    Silver: 80,
    Gold: 100,
    Platinum: 125,
    Iridium: 150,
    Agate: 25,
    Peridot: 50,
    Malachite: 75,
    Amber: 100,
    Garnet: 125,
    Aquamarine: 150,
    Topaz: 200,
    Amethyst: 250,
    Sapphire: 300,
    Ruby: 350,
    Emerald: 400,
    Diamond: 500
};
let miningLevelData = {miningExp: 0, miningNeededXP: 1000, miningLevel: 0};
let miningUnlocks = {u1: false, u2: false, u3: false, u4: false, u5: false, u6: false, u7: false, u8: false, u9: false};

const mBtn1 = document.getElementById("mineBtn1");
const mBtn2 = document.getElementById("mineBtn2");
const mBtn3 = document.getElementById("mineBtn3");
const mBtn4 = document.getElementById("mineBtn4");
const mBtn5 = document.getElementById("mineBtn5");
const mBtn6 = document.getElementById("mineBtn6");
const mBtn7 = document.getElementById("mineBtn7");
const mBtn8 = document.getElementById("mineBtn8");
const mBtn9 = document.getElementById("mineBtn9");
const mBtn10 = document.getElementById("mineBtn10");

const currentMiningExpTxt = document.getElementById("miningCurrentXP");
const neededMiningExpTxt = document.getElementById("miningNeededXP");
const currentMiningLevelTxt = document.getElementById("miningCurrentLevel");
const currentMiningExpProgress = document.getElementById("miningExpProgress");
const nextMiningUnlockTxt = document.getElementById("nextMiningUnlock");

mBtn1.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 70) { gainMineItem("Tin", 0); }
    else if (rnd <= 70 && rnd > 45) { gainMineItem("Copper", 0); }
    else if (rnd <= 45 && rnd > 25) { gainMineItem("Zinc", 0); }
    else if (rnd <= 25 && rnd > 13) { gainMineItem("Agate", 1); }
    else if (rnd <= 13 && rnd > 5) { gainMineItem("Peridot", 1); }
    else { gainMineItem("Malachite", 1); }
    startMiningCooldown(5, 0);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn2.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 75) { gainMineItem("Tin", 0); }
    else if (rnd <= 75 && rnd > 55) { gainMineItem("Copper", 0); }
    else if (rnd <= 55 && rnd > 40) { gainMineItem("Zinc", 0); }
    else if (rnd <= 40 && rnd > 30) { gainMineItem("Nickel", 0); }
    else if (rnd <= 30 && rnd > 18) { gainMineItem("Agate", 1); }
    else if (rnd <= 18 && rnd > 9) { gainMineItem("Peridot", 1); }
    else if (rnd <= 9 && rnd > 3) { gainMineItem("Malachite", 1); }
    else { gainMineItem("Amber", 1); }
    startMiningCooldown(10, 1);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn3.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Tin", 0); }
    else if (rnd <= 80 && rnd > 62) { gainMineItem("Copper", 0); }
    else if (rnd <= 62 && rnd > 47) { gainMineItem("Zinc", 0); }
    else if (rnd <= 47 && rnd > 37) { gainMineItem("Nickel", 0); }
    else if (rnd <= 37 && rnd > 30) { gainMineItem("Lead", 0); }
    else if (rnd <= 30 && rnd > 20) { gainMineItem("Agate", 1); }
    else if (rnd <= 20 && rnd > 12) { gainMineItem("Peridot", 1); }
    else if (rnd <= 12 && rnd > 6) { gainMineItem("Malachite", 1); }
    else if (rnd <= 6 && rnd > 2) { gainMineItem("Amber", 1); }
    else { gainMineItem("Garnet", 1); }
    startMiningCooldown(15, 2);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn4.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Copper", 0); }
    else if (rnd <= 80 && rnd > 62) { gainMineItem("Zinc", 0); }
    else if (rnd <= 62 && rnd > 47) { gainMineItem("Nickel", 0); }
    else if (rnd <= 47 && rnd > 37) { gainMineItem("Lead", 0); }
    else if (rnd <= 37 && rnd > 30) { gainMineItem("Cobalt", 0); }
    else if (rnd <= 30 && rnd > 20) { gainMineItem("Peridot", 1); }
    else if (rnd <= 20 && rnd > 12) { gainMineItem("Malachite", 1); }
    else if (rnd <= 12 && rnd > 6) { gainMineItem("Amber", 1); }
    else if (rnd <= 6 && rnd > 2) { gainMineItem("Garnet", 1); }
    else { gainMineItem("Aquamarine", 1); }
    startMiningCooldown(20, 3);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn5.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Zinc", 0); }
    else if (rnd <= 80 && rnd > 62) { gainMineItem("Nickel", 0); }
    else if (rnd <= 62 && rnd > 47) { gainMineItem("Lead", 0); }
    else if (rnd <= 47 && rnd > 37) { gainMineItem("Cobalt", 0); }
    else if (rnd <= 37 && rnd > 30) { gainMineItem("Titanium", 0); }
    else if (rnd <= 30 && rnd > 20) { gainMineItem("Malachite", 1); }
    else if (rnd <= 20 && rnd > 12) { gainMineItem("Amber", 1); }
    else if (rnd <= 12 && rnd > 6) { gainMineItem("Garnet", 1); }
    else if (rnd <= 6 && rnd > 2) { gainMineItem("Aquamarine", 1); }
    else { gainMineItem("Topaz", 1); }
    startMiningCooldown(25, 4);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn6.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Zinc", 0); }
    else if (rnd <= 80 && rnd > 65) { gainMineItem("Nickel", 0); }
    else if (rnd <= 65 && rnd > 52) { gainMineItem("Lead", 0); }
    else if (rnd <= 52 && rnd > 40) { gainMineItem("Cobalt", 0); }
    else if (rnd <= 40 && rnd > 30) { gainMineItem("Titanium", 0); }
    else if (rnd <= 30 && rnd > 21) { gainMineItem("Tungsten", 0); }
    else if (rnd <= 21 && rnd > 15) { gainMineItem("Malachite", 1); }
    else if (rnd <= 15 && rnd > 10) { gainMineItem("Amber", 1); }
    else if (rnd <= 10 && rnd > 6) { gainMineItem("Garnet", 1); }
    else if (rnd <= 6 && rnd > 3) { gainMineItem("Aquamarine", 1); }
    else if (rnd <= 3 && rnd > 1) { gainMineItem("Topaz", 1); }
    else { gainMineItem("Amethyst", 1); }
    startMiningCooldown(30, 5);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn7.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Nickel", 0); }
    else if (rnd <= 80 && rnd > 65) { gainMineItem("Lead", 0); }
    else if (rnd <= 65 && rnd > 52) { gainMineItem("Cobalt", 0); }
    else if (rnd <= 52 && rnd > 40) { gainMineItem("Titanium", 0); }
    else if (rnd <= 40 && rnd > 30) { gainMineItem("Tungsten", 0); }
    else if (rnd <= 30 && rnd > 21) { gainMineItem("Silver", 0); }
    else if (rnd <= 21 && rnd > 15) { gainMineItem("Amber", 1); }
    else if (rnd <= 15 && rnd > 10) { gainMineItem("Garnet", 1); }
    else if (rnd <= 10 && rnd > 6) { gainMineItem("Aquamarine", 1); }
    else if (rnd <= 6 && rnd > 3) { gainMineItem("Topaz", 1); }
    else if (rnd <= 3 && rnd > 1) { gainMineItem("Amethyst", 1); }
    else { gainMineItem("Sapphire", 1); }
    startMiningCooldown(35, 6);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn8.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Lead", 0); }
    else if (rnd <= 80 && rnd > 65) { gainMineItem("Cobalt", 0); }
    else if (rnd <= 65 && rnd > 52) { gainMineItem("Titanium", 0); }
    else if (rnd <= 52 && rnd > 40) { gainMineItem("Tungsten", 0); }
    else if (rnd <= 40 && rnd > 30) { gainMineItem("Silver", 0); }
    else if (rnd <= 30 && rnd > 21) { gainMineItem("Gold", 0); }
    else if (rnd <= 21 && rnd > 15) { gainMineItem("Garnet", 1); }
    else if (rnd <= 15 && rnd > 10) { gainMineItem("Aquamarine", 1); }
    else if (rnd <= 10 && rnd > 6) { gainMineItem("Topaz", 1); }
    else if (rnd <= 6 && rnd > 3) { gainMineItem("Amethyst", 1); }
    else if (rnd <= 3 && rnd > 1) { gainMineItem("Sapphire", 1); }
    else { gainMineItem("Ruby", 1); }
    startMiningCooldown(40, 7);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn9.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd) + 1;
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Cobalt", 0); }
    else if (rnd <= 80 && rnd > 65) { gainMineItem("Titanium", 0); }
    else if (rnd <= 65 && rnd > 52) { gainMineItem("Tungsten", 0); }
    else if (rnd <= 52 && rnd > 40) { gainMineItem("Silver", 0); }
    else if (rnd <= 40 && rnd > 30) { gainMineItem("Gold", 0); }
    else if (rnd <= 30 && rnd > 21) { gainMineItem("Platinum", 0); }
    else if (rnd <= 21 && rnd > 15) { gainMineItem("Aquamarine", 1); }
    else if (rnd <= 15 && rnd > 10) { gainMineItem("Topaz", 1); }
    else if (rnd <= 10 && rnd > 6) { gainMineItem("Amethyst", 1); }
    else if (rnd <= 6 && rnd > 3) { gainMineItem("Sapphire", 1); }
    else if (rnd <= 3 && rnd > 1) { gainMineItem("Ruby", 1); }
    else { gainMineItem("Emerald", 1); }
    startMiningCooldown(45, 8);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});
mBtn10.addEventListener("click", function() {
    let rnd = (Math.random() * 100);
    eventLogTxt.shift();
    if (rnd > 80) { gainMineItem("Titanium", 0); }
    else if (rnd <= 80 && rnd > 65) { gainMineItem("Tungsten", 0); }
    else if (rnd <= 65 && rnd > 52) { gainMineItem("Silver", 0); }
    else if (rnd <= 52 && rnd > 40) { gainMineItem("Gold", 0); }
    else if (rnd <= 40 && rnd > 30) { gainMineItem("Platinum", 0); }
    else if (rnd <= 30 && rnd > 21) { gainMineItem("Iridium", 0); }
    else if (rnd <= 21 && rnd > 15) { gainMineItem("Topaz", 1); }
    else if (rnd <= 15 && rnd > 10) { gainMineItem("Amethyst", 1); }
    else if (rnd <= 10 && rnd > 6) { gainMineItem("Sapphire", 1); }
    else if (rnd <= 6 && rnd > 3) { gainMineItem("Ruby", 1); }
    else if (rnd <= 3 && rnd > 0.5) { gainMineItem("Emerald", 1); }
    else { gainMineItem("Diamond", 1); }
    startMiningCooldown(50, 9);
    updateEventLog();
    updateMiningResourceDisplay();
    updateMiningExp();
});

function startMiningCooldown(CD, type) {
    const buttons = {
        0: {btn: mBtn1, key: "m1State", label: "Whisperwind Cave"},
        1: {btn: mBtn2, key: "m2State", label: "Raven's Hollow"},
        2: {btn: mBtn3, key: "m3State", label: "Silent Grotto"},
        3: {btn: mBtn4, key: "m4State", label: "Gloomspire Rift"},
        4: {btn: mBtn5, key: "m5State", label: "Cavern of Whispers"},
        5: {btn: mBtn6, key: "m6State", label: "Moonlit Wyrm's Rest"},
        6: {btn: mBtn7, key: "m7State", label: "Twilight Labyrinth"},
        7: {btn: mBtn8, key: "m8State", label: "Veil of Forgotten Paths"},
        8: {btn: mBtn9, key: "m9State", label: "Realm of Eternal Night"},
        9: {btn: mBtn10, key: "m10State", label: "Shattered Depths of Oblivion"}
    };
    const {btn, key, label} = buttons[type];
    let cd = CD;
    btn.disabled = true;
    btn.style.backgroundColor = "rgb(36, 61, 61)";
    btn.style.color = "white";
    btn.textContent = `Resting for ${cd} sec`;
    btn.style.cursor = "not-allowed";
    let state = {CD: cd};
    if (!isResetting) {
        localStorage.setItem(key, JSON.stringify(state));
    }
    const interval = setInterval(function() {
        if (isResetting) {
            clearInterval(interval);
            return;
        }
        cd--;
        if (cd <= 0) {
            btn.disabled = false;
            btn.style.backgroundColor = "lightblue";
            btn.style.color = "black";
            btn.textContent = label;
            btn.style.cursor = "pointer";
            clearInterval(interval); 
            localStorage.removeItem(key);
        } else {
            btn.textContent = `Resting for ${cd} sec`;
            state.CD = cd;
            if (!isResetting) {
                localStorage.setItem(key, JSON.stringify(state));
            }
        }
    }, 1000); 
}
function loadMineButtons() {
    for (let i = 1; i <= 10; i++) {
        const stateCD = localStorage.getItem(`m${i}State`);
        if (stateCD) {
            const status = JSON.parse(stateCD);
            startMiningCooldown(Number(status.CD), i - 1);
        }
    }
}
function gainMineItem(item, num) {
    const pickKey = item.toLowerCase() + "Pick";
    if (num == 0) {
        if (picks[pickKey]) {
            eventLogTxt.push(`You obtained 2 ${item} Ores`);
        }
        else {eventLogTxt.push(`You obtained ${item} Ore`);}
    }
    else { eventLogTxt.push(`You obtained ${item}`); }
    miningData[item]++;
    miningLevelData.miningExp += miningExpData[item];
    if (picks[pickKey]) {
        miningData[item]++;
        miningLevelData.miningExp += miningExpData[item];
    }
}
function updateEventLog() {
    for (let i = 0; i < eventLogTxt.length; i++) {
        const eventLogElement = document.getElementById(`eventLog${10 - i}`);
        if (eventLogElement) {
            eventLogElement.textContent = eventLogTxt[i];
        }
    }
}
function updateMiningResourceDisplay() {
    Object.keys(miningData).forEach(material => {
        const elementId = `${material.toLowerCase()}Text`;
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = miningData[material];
        }
    });
}
function updateMiningExp() {
    if (miningLevelData.miningExp >= miningLevelData.miningNeededXP) {
        miningLevelData.miningExp -= miningLevelData.miningNeededXP;
        miningLevelData.miningLevel++;
        miningLevelData.miningNeededXP += 500;
        checkMiningUnlocks(miningLevelData.miningLevel);
    }
    currentMiningExpTxt.textContent = miningLevelData.miningExp;
    neededMiningExpTxt.textContent = (1000 + (500*miningLevelData.miningLevel));
    currentMiningLevelTxt.textContent = miningLevelData.miningLevel;
    let percentage = (miningLevelData.miningExp / miningLevelData.miningNeededXP);
    currentMiningExpProgress.style.width = (percentage*100) + '%';
}
function checkMiningUnlocks(lvl) {
    const unlocks = [
        { level: 5, unlockKey: 'u1', nextLevel: 'Level 10', button: mBtn2, buttons: ['nickelPickBtn', 'amberNeckBtn'], rows: ['nickelRow', 'amberRow'], info: ['moreMInfo1', 'moreMInfoT1'] },
        { level: 10, unlockKey: 'u2', nextLevel: 'Level 15', button: mBtn3, buttons: ['leadPickBtn', 'garnetNeckBtn'], rows: ['leadRow', 'garnetRow'], info: ['moreMInfo2', 'moreMInfoT2'] },
        { level: 15, unlockKey: 'u3', nextLevel: 'Level 20', button: mBtn4, buttons: ['cobaltPickBtn', 'aquamarineNeckBtn'], rows: ['cobaltRow', 'aquamarineRow'], info: ['moreMInfo3', 'moreMInfoT3'] },
        { level: 20, unlockKey: 'u4', nextLevel: 'Level 30', button: mBtn5, buttons: ['titaniumPickBtn', 'topazNeckBtn'], rows: ['titaniumRow', 'topazRow'], info: ['moreMInfo4', 'moreMInfoT4'] },
        { level: 30, unlockKey: 'u5', nextLevel: 'Level 40', button: mBtn6, buttons: ['tungstenPickBtn', 'amethystNeckBtn'], rows: ['tungstenRow', 'amethystRow'], info: ['moreMInfo5', 'moreMInfoT5'] },
        { level: 40, unlockKey: 'u6', nextLevel: 'Level 50', button: mBtn7, buttons: ['silverPickBtn', 'sapphireNeckBtn'], rows: ['silverRow', 'sapphireRow'], info: ['moreMInfo6', 'moreMInfoT6'] },
        { level: 50, unlockKey: 'u7', nextLevel: 'Level 75', button: mBtn8, buttons: ['goldPickBtn', 'rubyNeckBtn'], rows: ['goldRow', 'rubyRow'], info: ['moreMInfo7', 'moreMInfoT7'] },
        { level: 75, unlockKey: 'u8', nextLevel: 'Level 100', button: mBtn9, buttons: ['platinumPickBtn', 'emeraldNeckBtn'], rows: ['platinumRow', 'emeraldRow'], info: ['moreMInfo8', 'moreMInfoT8'] },
        { level: 100, unlockKey: 'u9', nextLevel: 'Never', button: mBtn10, buttons: ['iridiumPickBtn', 'diamondNeckBtn'], rows: ['iridiumRow', 'diamondRow'], info: ['moreMInfo9', 'moreMInfoT9'] }
    ];
    unlocks.forEach(unlock => {
        if (lvl >= unlock.level && !miningUnlocks[unlock.unlockKey]) {
            nextMiningUnlockTxt.textContent = `Next Unlock: ${unlock.nextLevel}`;
            unlock.button.style.visibility = "visible";
            unlock.buttons.forEach(btnId => {
                document.getElementById(btnId).style.removeProperty("display");
            });
            unlock.rows.forEach(rowId => {
                document.getElementById(rowId).style.removeProperty("display");
            });
            unlock.info.forEach(infoId => {
                document.getElementById(infoId).style.removeProperty("display");
            });
            miningUnlocks[unlock.unlockKey] = true;
        }
    });
}
function resetMiningUnlocksForLoad(lvl) {
    if (lvl >= 5 && miningUnlocks.u1) {miningUnlocks.u1 = false;}
    if (lvl >= 10 && miningUnlocks.u2) {miningUnlocks.u2 = false;}
    if (lvl >= 15 && miningUnlocks.u3) {miningUnlocks.u3 = false;}
    if (lvl >= 20 && miningUnlocks.u4) {miningUnlocks.u4 = false;}
    if (lvl >= 30 && miningUnlocks.u5) {miningUnlocks.u5 = false;}
    if (lvl >= 40 && miningUnlocks.u6) {miningUnlocks.u6 = false;}
    if (lvl >= 50 && miningUnlocks.u7) {miningUnlocks.u7 = false;}
    if (lvl >= 75 && miningUnlocks.u8) {miningUnlocks.u8 = false;}
    if (lvl >= 100 && miningUnlocks.u9) {miningUnlocks.u9 = false;}
}

/* FORGE STUFF */
const items = {
    tinPick: {
        name: "Tin Pickaxe",
        description: "Allows you to gather 2 tin ores at once!",
        material: ["tin","agate"],
        price: ["10","1"]
    },
    copperPick: {
        name: "Copper Pickaxe",
        description: "Allows you to gather 2 copper ores at once!",
        material: ["copper","peridot"],
        price: ["10","1"]
    },
    zincPick: {
        name: "Zinc Pickaxe",
        description: "Allows you to gather 2 zinc ores at once!",
        material: ["zinc","malachite"],
        price: ["10","1"]
    },
    nickelPick: {
        name: "Nickel Pickaxe",
        description: "Allows you to gather 2 nickel ores at once!",
        material: ["nickel","amber"],
        price: ["10","1"]
    },
    leadPick: {
        name: "Lead Pickaxe",
        description: "Allows you to gather 2 lead ores at once!",
        material: ["lead","garnet"],
        price: ["10","1"]
    },
    cobaltPick: {
        name: "Cobalt Pickaxe",
        description: "Allows you to gather 2 cobalt ores at once!",
        material: ["cobalt","aquamarine"],
        price: ["10","1"]
    },
    titaniumPick: {
        name: "Titanium Pickaxe",
        description: "Allows you to gather 2 titanium ores at once!",
        material: ["titanium","topaz"],
        price: ["10","1"]
    },
    tungstenPick: {
        name: "Tungsten Pickaxe",
        description: "Allows you to gather 2 tungsten ores at once!",
        material: ["tungsten","amethyst"],
        price: ["10","1"]
    },
    silverPick: {
        name: "Silver Pickaxe",
        description: "Allows you to gather 2 silver ores at once!",
        material: ["silver","sapphire"],
        price: ["10","1"]
    },
    goldPick: {
        name: "Gold Pickaxe",
        description: "Allows you to gather 2 gold ores at once!",
        material: ["gold","ruby"],
        price: ["10","1"]
    },
    platinumPick: {
        name: "Platinum Pickaxe",
        description: "Allows you to gather 2 platinum ores at once!",
        material: ["platinum","emerald"],
        price: ["10","1"]
    },
    iridiumPick: {
        name: "Iridium Pickaxe",
        description: "Allows you to gather 2 iridium ores at once!",
        material: ["iridium","diamond"],
        price: ["10","1"]
    },
    agateNeck: {
        name: "Agate Necklace",
        description: "Doubles all gem exp gains!",
        material: ["tin","agate"],
        price: ["15","3"]
    },
    peridotNeck: {
        name: "Peridot Necklace",
        description: "Doubles all gem exp gains!",
        material: ["copper","peridot"],
        price: ["15","3"]
    },
    malachiteNeck: {
        name: "Malachite Necklace",
        description: "Doubles all gem exp gains!",
        material: ["zinc","malachite"],
        price: ["15","3"]
    },
    amberNeck: {
        name: "Amber Necklace",
        description: "Doubles all gem exp gains!",
        material: ["nickel","amber"],
        price: ["15","3"]
    },
    garnetNeck: {
        name: "Garnet Necklace",
        description: "Doubles all gem exp gains!",
        material: ["lead","garnet"],
        price: ["15","3"]
    },
    aquamarineNeck: {
        name: "Aquamarine Necklace",
        description: "Doubles all gem exp gains!",
        material: ["cobalt","aquamarine"],
        price: ["15","3"]
    },
    topazNeck: {
        name: "Topaz Necklace",
        description: "Doubles all gem exp gains!",
        material: ["titanium","topaz"],
        price: ["15","3"]
    },
    amethystNeck: {
        name: "Amethyst Necklace",
        description: "Doubles all gem exp gains!",
        material: ["tungsten","amethyst"],
        price: ["15","3"]
    },
    sapphireNeck: {
        name: "Sapphire Necklace",
        description: "Doubles all gem exp gains!",
        material: ["silver","sapphire"],
        price: ["15","3"]
    },
    rubyNeck: {
        name: "Ruby Necklace",
        description: "Doubles all gem exp gains!",
        material: ["gold","ruby"],
        price: ["15","3"]
    },
    emeraldNeck: {
        name: "Emerald Necklace",
        description: "Doubles all gem exp gains!",
        material: ["platinum","emerald"],
        price: ["15","3"]
    },
    diamondNeck: {
        name: "Diamond Necklace",
        description: "Doubles all gem exp gains!",
        material: ["iridium","diamond"],
        price: ["15","3"]
    }
};
let picks = {
    tinPick: false,
    copperPick: false,
    zincPick: false,
    nickelPick: false,
    leadPick: false,
    cobaltPick: false,
    titaniumPick: false,
    tungstenPick: false,
    silverPick: false,
    goldPick: false,
    platinumPick: false,
    iridiumPick: false
};
let necks = {
    agateNeck: false,
    peridotNeck: false,
    malachiteNeck: false,
    amberNeck: false,
    garnetNeck: false,
    aquamarineNeck: false,
    topazNeck: false,
    amethystNeck: false,
    sapphireNeck: false,
    rubyNeck: false,
    emeraldNeck: false,
    diamondNeck: false
};
function selectItem(itemId) {
    resetMineShopCosts();
    const item = items[itemId];
    document.getElementById('item-name').textContent = item.name;
    document.getElementById('item-description').textContent = item.description;
    item.material.forEach((mat, index) => {
        const price = item.price[index];
        const rowId = mat + 'ShopRow';
        document.getElementById(mat + 'CostTxt').textContent = price;
        document.getElementById(rowId).style.display = 'table-row';
    });
    document.getElementById('forgeButton').setAttribute('data-item', itemId);
}
function forgeItem() {
    const selectedItem = document.getElementById('forgeButton').getAttribute('data-item');
    const item = items[selectedItem];
    if (selectedItem) {
        let canAfford = true;
        for (let i = 0; i < item.material.length; i++) {
            const check = item.material[i].charAt(0).toUpperCase() + item.material[i].slice(1).toLowerCase();
            if (miningData[check] < item.price[i]) {
                canAfford = false;
                break;
            }
        }
        if (canAfford) {
            for (let i = 0; i < item.material.length; i++) {
                const check = item.material[i].charAt(0).toUpperCase() + item.material[i].slice(1).toLowerCase();
                miningData[check] -= item.price[i];
            }
            alert(`You have forged the ${item.name}!`);
            updateForgeItems(selectedItem);
            updateMiningResourceDisplay();
            updateForgeTxt();
        } else {
            alert("Can't afford!");
        }
    }
    else {alert("Nothing selected!");}
    document.getElementById('item-name').textContent = "Select an item";
    document.getElementById('item-description').textContent = "Description will appear here.";
    document.getElementById('forgeButton').removeAttribute('data-item');
    resetMineShopCosts();
}
function resetMineShopCosts() {
    const rows = document.querySelectorAll('.mineShopRow');
    rows.forEach(row => {
        row.style.display = 'none';
    });
}
function updateForgeTxt() {
    for (const material in miningData) {
        if (miningData.hasOwnProperty(material)) {
            const elementId = `shop${material}Txt`;
            const materialAmount = miningData[material];
            const element = document.getElementById(elementId);
            if (element) { element.textContent = materialAmount; }
        }
    }
}
function updateForgeItems(item) {
    document.getElementById(`${item}Btn`).style.display = "none";
    if (picks.hasOwnProperty(item)) { picks[item] = true; } 
    else if (necks.hasOwnProperty(item)) {
        necks[item] = true;
        let keys = Object.keys(miningExpData);
        let midpoint = Math.floor(keys.length / 2);
        for (let i = midpoint; i < keys.length; i++) {
            let key = keys[i];
            if (miningExpData.hasOwnProperty(key)) {
                miningExpData[key] += miningExpData[key];
            }
        }
    }
}
function loadPickButtons() {
    for (let pick in picks) {
        if (picks[pick]) {
            document.getElementById(pick.replace('Pick', 'PickBtn')).style.display = 'none';
        }
    }
}
function loadNeckButtons() {
    for (let neck in necks) {
        if (necks[neck]) {
            document.getElementById(neck.replace('Neck', 'NeckBtn')).style.display = 'none';
        }
    }
}

/* MINING INFO MODAL */
const miningModal = document.getElementById("myMiningModal");
const openModalBtn1 = document.getElementById("openModalBtn1");
const closeModalBtn1 = document.getElementById("closeModalBtn1");
openModalBtn1.addEventListener("click", function() {
    miningModal.style.display = "flex";
});
closeModalBtn1.addEventListener("click", function() {
    miningModal.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target === miningModal) {
        miningModal.style.display = "none";
    }
});
/* CHANGELOG MODAL */
var changelogMdl = document.getElementById("changelogModal");
var changelogBtn = document.getElementById("openChangelog");
var closeChangelogBtn = document.getElementsByClassName("closeChangelog")[0];
changelogBtn.onclick = function() {
    changelogMdl.style.display = "flex";
}
closeChangelogBtn.onclick = function() {
    changelogMdl.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == changelogMdl) {
      changelogMdl.style.display = "none";
    }
}
/* SAVE/LOAD SYSTEM */
function saveGame() {
    localStorage.setItem("miningData", JSON.stringify(miningData));
    localStorage.setItem("miningLevelData", JSON.stringify(miningLevelData));
    localStorage.setItem("miningUnlocks", JSON.stringify(miningUnlocks));
    localStorage.setItem("miningExpData", JSON.stringify(miningExpData));
    localStorage.setItem("pickData", JSON.stringify(picks));
    localStorage.setItem("neckData", JSON.stringify(necks));
}
function loadGame() {
    const savedMiningData = localStorage.getItem("miningData");
    const savedMiningLevelData = localStorage.getItem("miningLevelData");
    const savedMiningUnlocks = localStorage.getItem("miningUnlocks");
    const savedMiningExpData = localStorage.getItem("miningExpData");
    const savedPicks = localStorage.getItem("pickData");
    const savedNecks = localStorage.getItem("neckData");
    if (savedMiningData) {
        miningData = JSON.parse(savedMiningData);
    }
    if (savedMiningLevelData) {
        miningLevelData = JSON.parse(savedMiningLevelData);
    }
    if (savedMiningUnlocks) {
        miningUnlocks = JSON.parse(savedMiningUnlocks);
    }
    if (savedMiningExpData) {
        miningExpData = JSON.parse(savedMiningExpData);
    }
    if (savedPicks) {
        picks = JSON.parse(savedPicks);
    }
    if (savedNecks) {
        necks = JSON.parse(savedNecks);
    }
    updateMiningResourceDisplay();
    updateMiningExp();
    resetMiningUnlocksForLoad(miningLevelData.miningLevel);
    checkMiningUnlocks(miningLevelData.miningLevel);
    loadMineButtons();
    loadPickButtons();
    loadNeckButtons();
}
function resetGame() {
    let confirmed = window.confirm("Are you sure you want to HARD RESET?");
    if (confirmed) {
        isResetting = true;
        for (let i = 0; i < 10; i++) {
            const mStateKey = `m${i+1}State`;
            const savedState = localStorage.getItem(mStateKey);
            if (savedState) {
                const mStatus = JSON.parse(savedState);
                startMiningCooldown(mStatus.CD, i);
            }
        }
        localStorage.clear();
        miningData = {
            Tin: 0,
            Copper: 0,
            Zinc: 0,
            Nickel: 0,
            Lead: 0,
            Cobalt: 0,
            Titanium: 0,
            Tungsten: 0,
            Silver: 0,
            Gold: 0,
            Platinum: 0,
            Iridium: 0,
            Agate: 0,
            Peridot: 0,
            Malachite: 0,
            Amber: 0,
            Garnet: 0,
            Aquamarine: 0,
            Topaz: 0,
            Amethyst: 0,
            Sapphire: 0,
            Ruby: 0,
            Emerald: 0,
            Diamond: 0
        };
        miningExpData = {
            Tin: 5,
            Copper: 10,
            Zinc: 15,
            Nickel: 20,
            Lead: 30,
            Cobalt: 40,
            Titanium: 50,
            Tungsten: 60,
            Silver: 80,
            Gold: 100,
            Platinum: 125,
            Iridium: 150,
            Agate: 25,
            Peridot: 50,
            Malachite: 75,
            Amber: 100,
            Garnet: 125,
            Aquamarine: 150,
            Topaz: 200,
            Amethyst: 250,
            Sapphire: 300,
            Ruby: 350,
            Emerald: 400,
            Diamond: 500
        };
        miningLevelData = {
            miningExp: 0,
            miningNeededXP: 1000,
            miningLevel: 0
        };
        miningUnlocks = {
            u1: false,
            u2: false,
            u3: false,
            u4: false,
            u5: false,
            u6: false,
            u7: false,
            u8: false,
            u9: false
        };
        picks = {
            tinPick: false,
            copperPick: false,
            zincPick: false,
            nickelPick: false,
            leadPick: false,
            cobaltPick: false,
            titaniumPick: false,
            tungstenPick: false,
            silverPick: false,
            goldPick: false,
            platinumPick: false,
            iridiumPick: false
        };
        necks = {
            agateNeck: false,
            peridotNeck: false,
            malachiteNeck: false,
            amberNeck: false,
            garnetNeck: false,
            aquamarineNeck: false,
            topazNeck: false,
            amethystNeck: false,
            sapphireNeck: false,
            rubyNeck: false,
            emeraldNeck: false,
            diamondNeck: false
        };
        saveGame();
        alert("Reset Successful!");
        setTimeout(function() {
            window.location.reload();
        }, 100);
    } 
    else {
        alert("Smart choice.");
    }
}
window.onload = function() {
    loadGame();
};
window.onbeforeunload = function() {
    saveGame();
};