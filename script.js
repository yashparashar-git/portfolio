function toggleMode() {
    const body = document.body;
    const btn = document.querySelector(".toggle-btn");

    body.classList.toggle("light");
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
}
// aboutsection

function openTab(type) {
    const box = document.getElementById("contentBox");
    const frame = document.getElementById("contentFrame");

    box.style.display = "block";

    if (type === "skills") {
        frame.src = "skills.html";
    } else {
        frame.src = "education.html";
    }
}

let btn = document.getElementById("submit-btn");

btn.addEventListener("click", () => {
  alert("Message Sent");
});


body.document.getElementById("year").textContent = new Date().getFullYear();



