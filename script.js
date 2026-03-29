let score = 0;
const ADMIN_PASS = "Brainrot2026"; // Change this to your secret password

function loginAsAdmin() {
    let entry = prompt("Enter Admin Password:");
    if (entry === ADMIN_PASS) {
        document.getElementById("admin-panel").style.display = "block";
        alert("Admin Access Granted!");
    } else {
        alert("Wrong password!");
    }
}

function addPoints(amount) {
    score += amount;
    document.getElementById("score").innerText = score;
}

function resetScore() {
    score = 0;
    document.getElementById("score").innerText = score;
}
let score = 0;
const ADMIN_PASS = "Brainrot2026";
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

// Meme items list (Brainrot)
const memes = ["🚽", "🥤", "🗿", "🍕", "🍔", "💀"];

function loginAsAdmin() {
    let entry = prompt("Enter Admin Password:");
    if (entry === ADMIN_PASS) {
        document.getElementById("admin-panel").style.display = "block";
        alert("ACCESS GRANTED: WELCOME MASTER");
    }
}

// Function to spawn a random meme
function spawnMeme() {
    const meme = document.createElement("div");
    meme.className = "brainrot-item";
    meme.innerText = memes[Math.floor(Math.random() * memes.length)];
    
    // Random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    meme.style.left = x + "px";
    meme.style.top = y + "px";

    // When you click (Steal) the item
    meme.onclick = () => {
        score += 10;
        scoreDisplay.innerText = score;
        meme.remove(); // Remove item after stealing
        spawnMeme(); // Spawn a new one immediately!
    };

    gameContainer.appendChild(meme);
}

// Start the game by spawning 5 items
for(let i = 0; i < 5; i++) {
    spawnMeme();
}

// Admin Controls
function addPoints(amount) {
    score += amount;
    scoreDisplay.innerText = score;
}

function resetScore() {
    score = 0;
    scoreDisplay.innerText = score;
    gameContainer.innerHTML = ""; // Clear screen
    for(let i = 0; i < 5; i++) spawnMeme(); // Restart
}
