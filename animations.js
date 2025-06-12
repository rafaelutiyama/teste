document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".heart");
  const message = document.querySelector(".card p");

  // Subtle floating animation
  heart.animate([
    { transform: "translateY(0px)" },
    { transform: "translateY(-10px)" },
    { transform: "translateY(0px)" }
  ], {
    duration: 2000,
    iterations: Infinity
  });

  // Typing animation for the message
  const originalText = message.innerHTML;
  message.innerHTML = "";
  let index = 0;

  function typeText() {
    if (index < originalText.length) {
      message.innerHTML += originalText.charAt(index);
      index++;
      setTimeout(typeText, 30);
    }
  }

  typeText();
});
