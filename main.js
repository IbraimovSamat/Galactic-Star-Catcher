const starsElement = document.getElementById("stars");
const score = document.getElementById("score");
const gameOver = document.querySelector(".gameOver");

const blueStars =
  "https://cdn.codewizardshq.com/c44f9e7cc342cd57424a8305da41f8c457c8fcc062a7bcd2225855dbd092e9f9.png";
const purpleStars =
  "https://cdn.codewizardshq.com/92adf23f6a22359a634067ce22eb35af13e52f063ef1eb1015a9af15df45ec84.png";
const yellowStars =
  "https://cdn.codewizardshq.com/ff133f0a2556e3c4d0b4ea0e3532f43b239ed86ca3b46863a4b42ee84c249b17.png";
let iterationCount = 0;
let isMouseDown = false;

const rndLeftPosition =
  Math.floor(Math.random() * 200) - Math.floor(Math.random() * 100) + "px";
const rndTopPosition =
  Math.floor(Math.random() * 200) - Math.floor(Math.random() * 100) + "px";

function moveStar() {
  const starX = window.innerWidth - starsElement.clientWidth;
  const starY = window.innerHeight - starsElement.clientHeight;
  const newStarX = Math.floor(Math.random() * starX);
  const newStarY = Math.floor(Math.random() * starY);

  if (newStarX > 250) {
    starsElement.setAttribute("src", purpleStars);
  }

  if (newStarY > 590) {
    starsElement.setAttribute("src", yellowStars);
  }

  if (newStarX <= 200) {
    starsElement.setAttribute("src", blueStars);
  }
  starsElement.style.left = `${newStarX}px`;

  starsElement.style.top = `${newStarY}px`;
  starsElement.style.transition = "2000";
}

function starsCount() {
  starsElement.addEventListener("mousedown", () => {
    starsElement.style.border = "1px solid #fff";
    isMouseDown = true;
  });

  starsElement.addEventListener("mouseup", () => {
    isMouseDown = false;
    iterationCount++;
    score.innerText = iterationCount;
    console.log("mouseup");
    starsElement.style.border = "none";
  });

  starsElement.addEventListener("mouseleave", () => {
    if (isMouseDown) {
      iterationCount++;
      score.innerText = iterationCount;
      starsElement.style.border = "none";
    }
    isMouseDown = false;
  });
}

window.addEventListener("load", () => {
  let delay = 0;
  setTimeout(() => {
    starsCount();
    const interval = setInterval(() => {
      delay += 1;

      moveStar();
      if (delay > 15) {
        clearInterval(interval);
        gameOver.style.display = "block";
        starsElement.style.display = "none";
      }
    }, 1000);
  }, 1000);
});
