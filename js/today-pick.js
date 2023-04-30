const images = ["1.jpg","2.jpg","3.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const area = document.querySelector("#today-pick_img");

bgImage.src = `img/${chosenImage}`;

area.appendChild(bgImage);