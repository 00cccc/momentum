const images = ["permon.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const beImg = document.createElement("img");

beImg.src =`img/${chosenImage}`;

document.body.appendChild(beImg)
