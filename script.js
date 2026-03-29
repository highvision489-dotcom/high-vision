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
let score = 0;
const ADMIN_PASS = "Admin2026"; // Your secret password
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

function loginAsAdmin() {
    let entry = prompt("ENTER ACCESS KEY:");
    if (entry === ADMIN_PASS) {
        document.getElementById("admin-panel").style.display = "block";
        document.getElementById("login-trigger").style.display = "none";
        alert("POWER GRANTED. YOU ARE NOW THE MASTER.");
    }
}

// Power 1: Spawning specific items
function spawnItem(emoji) {
    const item = document.createElement("div");
    item.className = "brainrot-item";
    item.innerText = emoji;
    
    // Admin items are "higher quality" (glow more)
    item.style.filter = "drop-shadow(0 0 20px white)";
    
    // Random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    item.style.left = x + "px";
    item.style.top = y + "px";

    // Power 2: "Have them" (Collection logic)
    item.onclick = () => {
        score += 50;
        scoreDisplay.innerText = score;
        item.style.transform = "scale(0) rotate(360deg)"; // Cool disappear effect
        setTimeout(() => item.remove(), 200);
    };

    gameContainer.appendChild(item);
}

// Power 3: Set Max Points
function giveMaxPoints() {
    score = 999999;
    scoreDisplay.innerText = score;
}

// Power 4: The Nuke (Clear everything)
function clearWorld() {
    gameContainer.innerHTML = "";
    score = 0;
    scoreDisplay.innerText = score;
    alert("World has been reset by Admin.");
}
let score = 0;
const ADMIN_PASS = "Admin2026"; // Change this if you want
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");

// The "AI" Spawner Settings
let aiSpawnSpeed = 2000; // Spawns every 2 seconds by default
let aiStatus = true;
let aiTimer;

const memes = ["🚽", "🗿", "🥤", "💀", "🍔", "🍕"];

function loginAsAdmin() {
    let entry = prompt("ADMIN ACCESS CODE:");
    if (entry === ADMIN_PASS) {
        document.getElementById("admin-panel").style.display = "block";
        document.getElementById("login-trigger").style.display = "none";
    }
}

// THE MAIN SPAWN ENGINE (Used by both AI and Admin)
function createBrainrot(emoji, isManual = false) {
    const item = document.createElement("div");
    item.className = "brainrot-item";
    item.innerText = emoji || memes[Math.floor(Math.random() * memes.length)];
    
    // Admin-spawned items glow blue, AI items glow gold
    item.style.filter = isManual ? "drop-shadow(0 0 15px #00f)" : "drop-shadow(0 0 15px #f0f)";

    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);
    item.style.left = x + "px";
    item.style.top = y + "px";

    item.onclick = () => {
        score += 10;
        scoreDisplay.innerText = score;
        item.remove();
    };

    gameContainer.appendChild(item);
    
    // Items disappear after 5 seconds if no one steals them
    setTimeout(() => { if(item) item.remove(); }, 5000);
}

// THE AI BRAIN (Automatic Spawning)
function startAISpanner() {
    aiTimer = setInterval(() => {
        if(aiStatus) createBrainrot();
    }, aiSpawnSpeed);
}

// ADMIN POWERS
function toggleAI() {
    aiStatus = !aiStatus;
    alert("AI Spawning: " + (aiStatus ? "ON" : "OFF"));
}

function setSpeed(ms) {
    aiSpawnSpeed = ms;
    clearInterval(aiTimer); // Reset the timer with new speed
    startAISpanner();
}

function adminForceSpawn() {
    createBrainrot(null, true); // Force a random spawn immediately
}

// Initialize the game
startAISpanner();
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
let items = [];
const emojis = ["🚽", "🗿", "🥤", "💀", "🍔"];

// 1. ADMIN POWERS
function adminLogin() {
    if (prompt("ADMIN KEY:") === "Admin2026") {
        document.getElementById("admin-menu").style.display = "block";
    }
}

function spawnMassive(count) {
    for (let i = 0; i < count; i++) {
        items.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 30 + Math.random() * 20,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }
}

function clearAll() { items = []; score = 0; scoreEl.innerText = 0; }

// 2. PLAYER LOGIC
const player = { x: canvas.width/2, y: canvas.height/2, size: 50, emoji: "👑" };

window.addEventListener("mousemove", (e) => {
    player.x = e.clientX;
    player.y = e.clientY;
});

// 3. THE GAME LOOP (The "AI" that runs 60 times a second)
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

    // Draw & Move Brainrot Items
    items.forEach((item, index) => {
        item.x += item.speedX;
        item.y += item.speedY;

        // Bounce off walls
        if (item.x < 0 || item.x > canvas.width) item.speedX *= -1;
        if (item.y < 0 || item.y > canvas.height) item.speedY *= -1;

        // Draw Item
        ctx.font = `${item.size}px serif`;
        ctx.fillText(item.emoji, item.x, item.y);

        // Check Collision (Stealing Logic)
        let dist = Math.hypot(player.x - item.x, player.y - item.y);
        if (dist < player.size) {
            items.splice(index, 1); // Steal it!
            score += 10;
            scoreEl.innerText = score;
        }
    });

    // Draw Player
    ctx.font = "50px serif";
    ctx.fillText(player.emoji, player.x - 25, player.y + 25);

    requestAnimationFrame(update);
}

// Start with 50 items automatically
spawnMassive(50);
update();
