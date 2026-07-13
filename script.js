const title = document.getElementById("title");
const cake = document.getElementById("cake");
const letter = document.getElementById("letter");
const giftBtn = document.getElementById("giftBtn");

const message = `Dear Fouziya 💜,

Happy Birthday!

Today is all about celebrating you.

May your smile always stay bright.
May your dreams become reality.
May every new day bring happiness,
peace, success and beautiful memories.

Keep shining.
Keep smiling.
Keep believing in yourself.

💜 Borahae! 💜

Have the most amazing birthday! 🎂🎉`;

giftBtn.style.display = "none";

window.onload = () => {

    title.textContent = "💜 Happy Birthday Fouziya 💜";

    cake.textContent = "🎂";

    // Big celebration
    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    // Fireworks for 5 seconds
    const end = Date.now() + 5000;

    const interval = setInterval(() => {

        if (Date.now() > end) {
            clearInterval(interval);
            giftBtn.style.display = "inline-block";
            return;
        }

        confetti({
            particleCount:15,
            angle:60,
            spread:60,
            origin:{x:0}
        });

        confetti({
            particleCount:15,
            angle:120,
            spread:60,
            origin:{x:1}
        });

    },250);

};

giftBtn.onclick = () => {

    giftBtn.style.display = "none";

    let i = 0;

    function typeLetter(){

        if(i < message.length){

            letter.innerHTML += message.charAt(i) === "\n"
                ? "<br>"
                : message.charAt(i);

            i++;

            setTimeout(typeLetter,35);

        }

    }

    typeLetter();

};
