function displayProphecy() {
    const prophecies = [
        "The sky shall be torn asunder when the three eclipses align.",
        "When the rivers boil and the mountains tremble, the time of reckoning shall begin.",
        "A city built on lies will crumble when the final bell tolls.",
        "The chosen one shall rise, but so shall the shadow that follows.",
        "The final battle shall not be fought on land, but in the void between stars."
    ];
    const randomIndex = Math.floor(Math.random() * prophecies.length);
    document.getElementById("prophecy").innerText = prophecies[randomIndex];
}
