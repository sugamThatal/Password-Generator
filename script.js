const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

function generatepassword() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < 15; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }

    pass1.textContent = password1;
    pass2.textContent = password2;
}


pass1.addEventListener("click", () => {
    if (!pass1.textContent) return;
    navigator.clipboard.writeText(pass1.textContent);
    pass1.classList.add("copied");
    setTimeout(() => pass1.classList.remove("copied"), 800);
});

pass2.addEventListener("click", () => {
    if (!pass2.textContent) return;
    navigator.clipboard.writeText(pass2.textContent);
    pass2.classList.add("copied");
    setTimeout(() => pass2.classList.remove("copied"), 800);
});
