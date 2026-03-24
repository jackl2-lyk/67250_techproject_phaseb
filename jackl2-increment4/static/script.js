var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greet = document.getElementById("greeting");
    if (!greet) return;

    if (h < 5 || h >= 20) greet.innerHTML = "Good night, welcome to MonoMuse.";
    else if (h < 12) greet.innerHTML = "Good morning, welcome to MonoMuse.";
    else if (h < 18) greet.innerHTML = "Good afternoon, welcome to MonoMuse.";
    else greet.innerHTML = "Good evening, welcome to MonoMuse.";
}

function setYear() {
    const y = document.getElementById("year");
    if (y) y.innerHTML = new Date().getFullYear();
}

function ActiveNav() {
    document.querySelectorAll('nav a').forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

let currentPrice = 0;

function openModal(p) {
    currentPrice = p;
    const modal = document.getElementById("modal");
    if (!modal) return;

    modal.style.display = "flex";

    const qty = document.getElementById("qty");
    if (qty) {
        qty.value = 1;
        qty.oninput = updateTotal;
    }

    updateTotal();
}

function updateTotal() {
    const qty = parseInt(document.getElementById("qty")?.value) || 0;
    const total = document.getElementById("total");
    if (total) total.textContent = qty * currentPrice;
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
}

function submitForm() {
    alert("Redirecting to payment system.");
}

function setupMoreButton() {
    const btn = document.getElementById("moreBtn");
    const content = document.getElementById("moreContent");

    if (!btn || !content) return;

    btn.onclick = function() {
        if (content.style.display === "block") {
            content.style.display = "none";
            btn.textContent = "More";
        } else {
            content.style.display = "block";
            btn.textContent = "Less";
        }
    };
}


document.addEventListener("DOMContentLoaded", function () {
    greeting(hour);
    setYear();
    ActiveNav();
    setupMoreButton();  

    const closeBtn = document.getElementById("closeBtn");
    if (closeBtn) closeBtn.onclick = closeModal;

    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) submitBtn.onclick = submitForm;

    window.onclick = function (e) {
        const modal = document.getElementById("modal");
        if (e.target === modal) closeModal();
    };
});