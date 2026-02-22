if (window.location.pathname.includes("test.html")) {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
}

function goToTest() {
    window.location.href = "login.html";
}

function scrollToWhy() {
    document.getElementById("why").scrollIntoView({behavior: "smooth"});
}

// Get stored users or empty object
let users = JSON.parse(localStorage.getItem("users")) || {};

function loginUser() {
    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.innerText = "";

    if (!name) {
        errorMsg.innerText = "Please enter your name.";
        return;
    }

    if (!username) {
        errorMsg.innerText = "Please enter email or phone number.";
        return;
    }

    if (!password) {
        errorMsg.innerText = "Please enter password.";
        return;
    }

    if (!users[username]) {
        errorMsg.innerText = "Account not found. Please sign up.";
        return;
    }

    if (users[username] !== password) {
        errorMsg.innerText = "Incorrect password.";
        return;
    }

    // SUCCESS
    localStorage.setItem("username", name);
    localStorage.setItem("loggedIn", "true");

    window.location.href = "childinfo.html";
}

function showSignup() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.style.color = "red";
    errorMsg.innerText = "";

    if (!username) {
        errorMsg.innerText = "Enter email or phone to sign up.";
        return;
    }

    if (!password) {
        errorMsg.innerText = "Create a password.";
        return;
    }

    if (users[username]) {
        errorMsg.innerText = "Account already exists. Please sign in.";
        return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    errorMsg.style.color = "green";
    errorMsg.innerText = "Account created successfully! You can now sign in.";
}

function continueGuest() {
    localStorage.setItem("username", "Guest");
    localStorage.setItem("loggedIn", "true");
    window.location.href = "childinfo.html";
}


// ================= NAVBAR GREETING =================

document.addEventListener("DOMContentLoaded", function () {

    const userArea = document.getElementById("userArea");
    if (!userArea) return;

    const username = localStorage.getItem("username");

    if (username) {
        userArea.innerHTML = `
            <span class="fw-semibold text-dark">Hi, ${username}</span>
            <button class="btn btn-sm btn-outline-danger ms-2" onclick="logout()">Logout</button>
        `;
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

function submitTest() {
    let score = 0;
    let answer = document.querySelector('input[name="q1"]:checked');

    if (answer) {
        score += parseInt(answer.value);
    }

    localStorage.setItem("testScore", score);
    window.location.href = "report.html";
}


window.onload = function() {
    if (window.location.pathname.includes("report.html")) {
        let score = localStorage.getItem("testScore");

        if (score === null) {
            document.getElementById("reportArea").innerHTML = 
                "<p>Please complete the screening first.</p>";
        } else {
            document.getElementById("reportArea").innerHTML =
                `<p>Your score: ${score}</p>
                 <p>This is a basic screening insight. Please consult a specialist for evaluation.</p>`;
        }
    }
}


function goNextStep() {
    let name = document.getElementById("childName").value.trim();
    let age = document.getElementById("childAge").value.trim();

    if (!name || !age) {
        alert("Please fill required fields.");
        return;
    }

    localStorage.setItem("childName", name);
    localStorage.setItem("childAge", age);
    window.location.href = "step2.html";
}

function goBackStep1() {
    window.location.href = "test.html";
}

function startScreening() {
    window.location.href = "test.html";
}
