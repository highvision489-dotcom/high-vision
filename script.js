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
