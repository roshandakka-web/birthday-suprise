const terminal = document.getElementById("terminal");

const friend = "SHAIK FOUZIYA ";

const lines = [
"💜 BTS ARMY DATABASE v2026",
"",
"🔒 Connecting to HYBE Secure Server...",
"",
"████████████████████ 100%",
"",
"🌌 Searching ARMY Members...",
"",
"████████████████████ 100%",
"",
"🔍 Looking for today's birthday...",
"",
"████████████████████ 100%",
"",
"💜 TARGET FOUND!",
"",
"👤 Name : " + friend,
"💜 ARMY Status : VERIFIED",
"🎂 Birthday : TODAY",
"",
"📂 Loading Birthday Protocol...",
"",
"⚠️ Secret Message Incoming...",
""
];

let i = 0;

function type() {
    if (i < lines.length) {
        terminal.innerHTML += lines[i] + "\n";
        terminal.scrollTop = terminal.scrollHeight;
        i++;
        setTimeout(type, 600);
    } else {
        countdown();
    }
}

function countdown() {
    let n = 3;

    const timer = setInterval(() => {

        terminal.innerHTML += "\n💜 Surprise in " + n + "...";

        terminal.scrollTop = terminal.scrollHeight;

        n--;

        if (n === 0) {
            clearInterval(timer);

            setTimeout(showBirthday,1000);
        }

    },1000);
}

function showBirthday(){

document.body.style.overflow="auto";

terminal.innerHTML=`

<div class="card center">

<div class="title">

🎉 HAPPY BIRTHDAY 🎉

</div>

<h1 class="glow">${friend}</h1>

<div class="cake">🎂</div>

<div class="message">

💜 Dear Fouziya,

<br><br>

Today is all about YOU!

<br><br>

May your smile shine brighter every day.

<br>

May happiness always find you.

<br>

May every dream become reality.

<br>

May this year bring countless beautiful memories.

<br><br>

💜 Keep shining.

<br>

💜 Keep smiling.

<br>

💜 Keep believing in yourself.

<br><br>

✨ May your life always sparkle like the stars.

<br><br>

💜 FROM BTS ARMY 💜

<br><br>

🎉 Happy Birthday once again! 🎉

</div>

</div>

`;

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

// Big confetti burst
confetti({
    particleCount:300,
    spread:180,
    origin:{y:0.6}
});

// Fireworks 🎆
const duration = 5000;
const animationEnd = Date.now() + duration;

const interval = setInterval(() => {

    if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
    }

    confetti({
        particleCount:35,
        angle:60,
        spread:55,
        origin:{x:0}
    });

    confetti({
        particleCount:35,
        angle:120,
        spread:55,
        origin:{x:1}
    });

},250);
