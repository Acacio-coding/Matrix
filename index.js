const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

//Resizing canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const width = canvas.width;
const height = canvas.height;

//Characters and fontsize
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;

//How many chars can fit horizontally
const columns = width / fontSize;

//Array of falling characters
const charDrops = [];

for (let x = 0; x < columns; x++) {
  charDrops[x] = 1;
}

//Draw function
const drawMatrix = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, width, height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < charDrops.length; i++) {
    const selectedChar = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    context.fillText(selectedChar, i * fontSize, charDrops[i] * fontSize);

    if (charDrops[i] * fontSize > height && Math.random() > 0.975) {
      charDrops[i] = 0;
    }
    charDrops[i]++;
  }
};

setInterval(drawMatrix, 30);
