const password = document.getElementById("password");
const bar = document.getElementById("bar");
const text = document.getElementById("text");

password.addEventListener("input", () => {
    const value = password.value;
    let score = 0;

    if (value.length >= 6) score++;
    if (value.length >= 10) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[@$!%*?&#]/.test(value)) score++;

    if (value.length === 0) {
        bar.style.width = "0%";
        text.textContent = "";
        bar.style.background = "transparent";
        return;
    }

    if (score <= 2) {
        bar.style.width = "33%";
        bar.style.background = "#e74c3c";
        text.textContent = "Zayıf";
    } else if (score === 3 || score === 4) {
        bar.style.width = "66%";
        bar.style.background = "#f1c40f";
        text.textContent = "Orta";
    } else {
        bar.style.width = "100%";
        bar.style.background = "#2ecc71";
        text.textContent = "Güçlü";
    }
});
