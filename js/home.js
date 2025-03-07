const textElement = document.querySelector(".second-text");
const roles = ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER", "UI/UX DESIGNER"];
let index = 0;

const typeEffect = () => {
    let text = roles[index];
    let charIndex = 0;
    textElement.textContent = "";

    const typing = setInterval(() => {
        if (charIndex < text.length) {
            textElement.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(typing);
            setTimeout(() => {
                index = (index + 1) % roles.length;
                typeEffect();
            }, 2000);
        }
    }, 150);
};

typeEffect();
