const terminal = document.getElementById("terminal");

const friend = "Fouziya";

const lines = [
"🔒 Secure Government Birthday Database",
"",
"Initializing Protocol...",
"",
"📡 Connecting to Global Network...",
"████████████████████ 100%",
"",
"🌍 Scanning 8,000,000,000 Humans...",
"████████████████████ 100%",
"",
"🔍 Searching Birthday Database...",
"████████████████████ 100%",
"",
"🚨 ALERT!",
"",
"Suspicious Human Found!",
"",
"👤 Name : " + friend,
"🎂 Birthday Status : TODAY",
"😎 Coolness Level : MAXIMUM",
"",
"Loading Criminal Record...",
"",
"📄 Crime #1 : Being too awesome 😎",
"📄 Crime #2 : Making everyone laugh 😂",
"📄 Crime #3 : Eating too much cake 🎂",
"",
"⚖ Checking Verdict..."
];

let index = 0;

function typeLine() {

    if (index < lines.length) {

        terminal.innerHTML += lines[index] + "\n";

        terminal.scrollTop = terminal.scrollHeight;

        index++;

        setTimeout(typeLine, 700);

    } else {

        countdown();

    }

}

function countdown() {

    let n = 3;

    const timer = setInterval(() => {

        terminal.innerHTML += "\n🚀 Launching Surprise in " + n + "...";

        terminal.scrollTop = terminal.scrollHeight;

        n--;

        if (n === 0) {

            clearInterval(timer);

            setTimeout(showBirthday,1000);

        }

    },1000);

}

function showBirthday(){

document.body.style.background="#111";

terminal.innerHTML=`

<div class="center">

<div class="big">

🎉 HAPPY BIRTHDAY 🎉

<br><br>

${friend}

</div>

<br>

🎂 Wishing you a day filled with happiness!

<br><br>

✨ May all your dreams come true.

<br>

😂 Keep smiling and keep making everyone laugh.

<br>

🎁 Have an amazing birthday!

<br><br>

<pre>

        i i i i

      |:H:a:p:p:y:|

    __|___________|__

   |^^^^^^^^^^^^^^^^^|

   |   BIRTHDAY!!!   |

   |_________________|

</pre>

<br>

❤️ Stay awesome, Fouziya!

<br><br>

Made with ❤️ by Roshan 😎

</div>

`;

confetti({
    particleCount:250,
    spread:180,
    origin:{y:0.6}
});

}

typeLine();
