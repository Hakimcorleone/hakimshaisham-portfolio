const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const contactLayout = document.querySelector(".contact-layout");

if (contactLayout) {
  const coinPanel = document.createElement("div");
  const coinButton = document.createElement("button");
  const coinStatus = document.createElement("span");

  coinPanel.className = "credit-console";
  coinButton.className = "coin-button";
  coinButton.type = "button";
  coinButton.textContent = "Insert Coin";
  coinButton.setAttribute("aria-pressed", "false");
  coinButton.setAttribute("aria-label", "Activate builder mode arcade effect");
  coinStatus.className = "coin-status";
  coinStatus.setAttribute("role", "status");
  coinStatus.textContent = "1P Ready";

  coinButton.addEventListener("click", () => {
    const isActive = coinButton.getAttribute("aria-pressed") === "true";

    coinButton.setAttribute("aria-pressed", (!isActive).toString());
    document.body.classList.toggle("builder-mode", !isActive);
    coinStatus.textContent = isActive ? "1P Ready" : "Builder Mode Activated";
  });

  coinPanel.append(coinButton, coinStatus);
  contactLayout.append(coinPanel);
}
