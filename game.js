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
}

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
let miningLevelData = {
    miningExp: 0,
    miningNeededXP: 1000,
    miningLevel: 0
};
let miningUnlocks = {
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

const tinTxt = document.getElementById("tinText");
const copperTxt = document.getElementById("copperText");
const zincTxt = document.getElementById("zincText");
const nickelTxt = document.getElementById("nickelText");
const leadTxt = document.getElementById("leadText");
const cobaltTxt = document.getElementById("cobaltText");
const titaniumTxt = document.getElementById("titaniumText");
const tungstenTxt = document.getElementById("tungstenText");
const silverTxt = document.getElementById("silverText");
const goldTxt = document.getElementById("goldText");
const platinumTxt = document.getElementById("platinumText");
const iridiumTxt = document.getElementById("iridiumText");

const agateTxt = document.getElementById("agateText");
const peridotTxt = document.getElementById("peridotText");
const malachiteTxt = document.getElementById("malachiteText");
const amberTxt = document.getElementById("amberText");
const garnetTxt = document.getElementById("garnetText");
const aquamarineTxt = document.getElementById("aquamarineText");
const topazTxt = document.getElementById("topazText");
const amethystTxt = document.getElementById("amethystText");
const sapphireTxt = document.getElementById("sapphireText");
const rubyTxt = document.getElementById("rubyText");
const emeraldTxt = document.getElementById("emeraldText");
const diamondTxt = document.getElementById("diamondText");

const currentMiningExpTxt = document.getElementById("miningCurrentXP");
const neededMiningExpTxt = document.getElementById("miningNeededXP");
const currentMiningLevelTxt = document.getElementById("miningCurrentLevel");
const currentMiningExpProgress = document.getElementById("miningExpProgress");
const nextMiningUnlockTxt = document.getElementById("nextMiningUnlock");

mBtn1.addEventListener("click", function() {
    let rnd = Math.random() * 100;
    rnd = Math.floor(rnd);
    eventLogTxt.shift();
    if (rnd > 70) { gainMineItem("Tin", 0); }
    else if (rnd <= 70 && rnd > 45) { gainMineItem("Copper", 0); }
    else if (rnd <= 45 && rnd > 25) { gainMineItem("Zinc", 0); }
    else if (rnd <= 25 && rnd > 13) { gainMineItem("Agate", 1); }
    else if (rnd <= 13 && rnd > 5) { gainMineItem("Peridot", 1); }
    else if (rnd <= 5) { gainMineItem("Malachite", 1); }
    //startMiningCooldown(5, 0);
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
    let state = {CD: cd};
    localStorage.setItem(key, JSON.stringify(state));
    const interval = setInterval(function() {
        cd--;
        if (cd <= 0) {
            btn.disabled = false;
            btn.style.backgroundColor = "lightblue";
            btn.style.color = "black";
            btn.textContent = label;
            clearInterval(interval); 
            localStorage.removeItem(key);
        } else {
            btn.textContent = `Resting for ${cd} sec`;
            state.CD = cd;
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, 1000); 
}
function loadMineButtons() {
    const m1StateCD = localStorage.getItem("m1State");
    const m2StateCD = localStorage.getItem("m2State");
    const m3StateCD = localStorage.getItem("m3State");
    const m4StateCD = localStorage.getItem("m4State");
    const m5StateCD = localStorage.getItem("m5State");
    const m6StateCD = localStorage.getItem("m6State");
    const m7StateCD = localStorage.getItem("m7State");
    const m8StateCD = localStorage.getItem("m8State");
    const m9StateCD = localStorage.getItem("m9State");
    const m10StateCD = localStorage.getItem("m10State");
    if (m1StateCD) {
        const m1Status = JSON.parse(m1StateCD);
        startMiningCooldown(Number(m1Status.CD), 0);
    }
    if (m2StateCD) {
        const m2Status = JSON.parse(m2StateCD);
        startMiningCooldown(Number(m2Status.CD), 1);
    }
    if (m3StateCD) {
        const m3Status = JSON.parse(m3StateCD);
        startMiningCooldown(Number(m3Status.CD), 2);
    }
    if (m4StateCD) {
        const m4Status = JSON.parse(m4StateCD);
        startMiningCooldown(Number(m4Status.CD), 3);
    }
    if (m5StateCD) {
        const m5Status = JSON.parse(m5StateCD);
        startMiningCooldown(Number(m5Status.CD), 4);
    }
    if (m6StateCD) {
        const m6Status = JSON.parse(m6StateCD);
        startMiningCooldown(Number(m6Status.CD), 5);
    }
    if (m7StateCD) {
        const m7Status = JSON.parse(m7StateCD);
        startMiningCooldown(Number(m7Status.CD), 6);
    }
    if (m8StateCD) {
        const m8Status = JSON.parse(m8StateCD);
        startMiningCooldown(Number(m8Status.CD), 7);
    }
    if (m9StateCD) {
        const m9Status = JSON.parse(m9StateCD);
        startMiningCooldown(Number(m9Status.CD), 8);
    }
    if (m10StateCD) {
        const m10Status = JSON.parse(m10StateCD);
        startMiningCooldown(Number(m10Status.CD), 9);
    }
}
function gainMineItem(item, num) {
    if (num == 0) { eventLogTxt.push(`You obtained ${item} Ore`); }
    else { eventLogTxt.push(`You obtained ${item}`); }
    miningData[item]++;
    miningLevelData.miningExp += miningExpData[item];
}
function updateEventLog() {
    eventLog10.textContent = eventLogTxt[0];
    eventLog9.textContent = eventLogTxt[1];
    eventLog8.textContent = eventLogTxt[2];
    eventLog7.textContent = eventLogTxt[3];
    eventLog6.textContent = eventLogTxt[4];
    eventLog5.textContent = eventLogTxt[5];
    eventLog4.textContent = eventLogTxt[6];
    eventLog3.textContent = eventLogTxt[7];
    eventLog2.textContent = eventLogTxt[8];
    eventLog1.textContent = eventLogTxt[9];
}
function updateMiningResourceDisplay() {
    tinTxt.textContent = miningData.Tin;
    copperTxt.textContent = miningData.Copper;
    zincTxt.textContent = miningData.Zinc;
    nickelTxt.textContent = miningData.Nickel;
    leadTxt.textContent = miningData.Lead;
    cobaltTxt.textContent = miningData.Cobalt;
    titaniumTxt.textContent = miningData.Titanium;
    tungstenTxt.textContent = miningData.Tungsten;
    silverTxt.textContent = miningData.Silver;
    goldTxt.textContent = miningData.Gold;
    platinumTxt.textContent = miningData.Platinum;
    iridiumTxt.textContent = miningData.Iridium;
    agateTxt.textContent = miningData.Agate;
    peridotTxt.textContent = miningData.Peridot;
    malachiteTxt.textContent = miningData.Malachite;
    amberTxt.textContent = miningData.Amber;
    garnetTxt.textContent = miningData.Garnet;
    aquamarineTxt.textContent = miningData.Aquamarine;
    topazTxt.textContent = miningData.Topaz;
    amethystTxt.textContent = miningData.Amethyst;
    sapphireTxt.textContent = miningData.Sapphire;
    rubyTxt.textContent = miningData.Ruby;
    emeraldTxt.textContent = miningData.Emerald;
    diamondTxt.textContent = miningData.Diamond;
}
function updateMiningExp() {
    if (miningLevelData.miningExp >= miningLevelData.miningNeededXP) {
        let tmp = miningLevelData.miningExp - miningLevelData.miningNeededXP;
        miningLevelData.miningExp = tmp;
        miningLevelData.miningLevel++;
        miningLevelData.miningNeededXP += 100;
        checkMiningUnlocks(miningLevelData.miningLevel);
    }
    currentMiningExpTxt.textContent = miningLevelData.miningExp;
    neededMiningExpTxt.textContent = (1000 + (100*miningLevelData.miningLevel));
    currentMiningLevelTxt.textContent = miningLevelData.miningLevel;

    let percentage = (miningLevelData.miningExp / miningLevelData.miningNeededXP);
    currentMiningExpProgress.style.width = (percentage*100) + '%';
}
function checkMiningUnlocks(lvl) {
    if (lvl >= 5 && !miningUnlocks.u1) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 10";
        mBtn2.style.visibility = "visible";
        document.getElementById("nickelRow").style.removeProperty("display");
        document.getElementById("amberRow").style.removeProperty("display");
        document.getElementById("moreMInfo1").style.removeProperty("display");
        document.getElementById("moreMInfoT1").style.removeProperty("display");
        miningUnlocks.u1 = true;
    }
    if (lvl >= 10 && !miningUnlocks.u2) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 15";
        mBtn3.style.visibility = "visible";
        document.getElementById("leadRow").style.removeProperty("display");
        document.getElementById("garnetRow").style.removeProperty("display");
        document.getElementById("moreMInfo2").style.removeProperty("display");
        document.getElementById("moreMInfoT2").style.removeProperty("display");
        miningUnlocks.u2 = true;
    }
    if (lvl >= 15 && !miningUnlocks.u3) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 20";
        mBtn4.style.visibility = "visible";
        document.getElementById("cobaltRow").style.removeProperty("display");
        document.getElementById("aquamarineRow").style.removeProperty("display");
        document.getElementById("moreMInfo3").style.removeProperty("display");
        document.getElementById("moreMInfoT3").style.removeProperty("display");
        miningUnlocks.u3 = true;
    }
    if (lvl >= 20 && !miningUnlocks.u4) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 30";
        mBtn5.style.visibility = "visible";
        document.getElementById("titaniumRow").style.removeProperty("display");
        document.getElementById("topazRow").style.removeProperty("display");
        document.getElementById("moreMInfo4").style.removeProperty("display");
        document.getElementById("moreMInfoT4").style.removeProperty("display");
        miningUnlocks.u4 = true;
    }
    if (lvl >= 30 && !miningUnlocks.u5) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 40";
        mBtn6.style.visibility = "visible";
        document.getElementById("tungstenRow").style.removeProperty("display");
        document.getElementById("amethystRow").style.removeProperty("display");
        document.getElementById("moreMInfo5").style.removeProperty("display");
        document.getElementById("moreMInfoT5").style.removeProperty("display");
        miningUnlocks.u5 = true;
    }
    if (lvl >= 40 && !miningUnlocks.u6) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 50";
        mBtn7.style.visibility = "visible";
        document.getElementById("silverRow").style.removeProperty("display");
        document.getElementById("sapphireRow").style.removeProperty("display");
        document.getElementById("moreMInfo6").style.removeProperty("display");
        document.getElementById("moreMInfoT6").style.removeProperty("display");
        miningUnlocks.u6 = true;
    }
    if (lvl >= 50 && !miningUnlocks.u7) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 75";
        mBtn8.style.visibility = "visible";
        document.getElementById("goldRow").style.removeProperty("display");
        document.getElementById("rubyRow").style.removeProperty("display");
        document.getElementById("moreMInfo7").style.removeProperty("display");
        document.getElementById("moreMInfoT7").style.removeProperty("display");
        miningUnlocks.u7 = true;
    }
    if (lvl >= 75 && !miningUnlocks.u8) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Level 100";
        mBtn9.style.visibility = "visible";
        document.getElementById("platinumRow").style.removeProperty("display");
        document.getElementById("emeraldRow").style.removeProperty("display");
        document.getElementById("moreMInfo8").style.removeProperty("display");
        document.getElementById("moreMInfoT8").style.removeProperty("display");
        miningUnlocks.u8 = true;
    }
    if (lvl >= 100 && !miningUnlocks.u9) {
        nextMiningUnlockTxt.textContent = "Next Unlock: Never";
        mBtn10.style.visibility = "visible";
        document.getElementById("iridiumRow").style.removeProperty("display");
        document.getElementById("diamondRow").style.removeProperty("display");
        document.getElementById("moreMInfo9").style.removeProperty("display");
        document.getElementById("moreMInfoT9").style.removeProperty("display");
        miningUnlocks.u9 = true;
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
}
function loadGame() {
    const savedMiningData = localStorage.getItem("miningData");
    const savedMiningLevelData = localStorage.getItem("miningLevelData");
    const savedMiningUnlocks = localStorage.getItem("miningUnlocks");
    const savedMiningExpData = localStorage.getItem("miningExpData");
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
        miningUnlocks = JSON.parse(savedMiningExpData);
    }
    updateMiningResourceDisplay();
    updateMiningExp();
    checkMiningUnlocks(miningLevelData.miningLevel);
    loadMineButtons();
}
function resetGame() {
    let confirmed = window.confirm("Are you sure you want to HARD RESET?");
    if (confirmed) {
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
        saveGame();
        alert("Reset Successful!");
        window.location.reload();
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