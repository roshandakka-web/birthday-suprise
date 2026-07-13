const terminal = document.getElementById("terminal");
const main = document.getElementById("main");

const title = document.getElementById("title");
const cake = document.getElementById("cake");
const letter = document.getElementById("letter");
const giftBtn = document.getElementById("giftBtn");


const friend = "SHAIK FOUZIYA ";


const lines=[

"💜 BTS ARMY DATABASE v2026",
"",
"🔒 Connecting to HYBE Secure Server...",
"",
"████████████████ 100%",
"",
"🌌 Searching ARMY Members...",
"",
"████████████████ 100%",
"",
"🔍 Finding birthday target...",
"",
"████████████████ 100%",
"",
"💜 TARGET FOUND!",
"",
"👤 Name : shaik Fouziya ",
"💜 ARMY Status : VERIFIED",
"🎂 Birthday : TODAY",
"",
"📂 Loading Birthday Protocol...",
"",
"⚠️ Secret Message Incoming..."

];


let i=0;


function type(){

if(i<lines.length){

terminal.innerHTML += lines[i]+"\n";

i++;

setTimeout(type,500);

}

else{

countdown();

}

}



function countdown(){

let n=3;

let timer=setInterval(()=>{

terminal.innerHTML += "\n💜 Surprise in "+n+"...";

n--;

if(n===0){

clearInterval(timer);

setTimeout(showBirthday,1000);

}

},1000);

}



function showBirthday(){

terminal.style.display="none";

main.style.display="block";

title.textContent="🎉 HAPPY BIRTHDAY FOUZIYA 🎉  ";

cake.textContent="🎂";


confetti({

particleCount:300,
spread:180

});

const end = Date.now() + 5000;

const fireworks = setInterval(() => {

    if (Date.now() > end) {
        clearInterval(fireworks);
        return;
    }

    confetti({
        particleCount: 20,
        angle: 60,
        spread: 70,
        origin: {x: 0}
    });

    confetti({
        particleCount: 20,
        angle: 120,
        spread: 70,
        origin: {x: 1}
    });

}, 250);


giftBtn.onclick=()=>{

giftBtn.style.display="none";

let message=`Dear Fouziya ,

Happy Birthday!

Today is all about celebrating you.

May your smile always stay bright.
May your dreams become reality.
May every day bring happiness,
peace and beautiful memories.

Keep shining.
Keep smiling.
Keep believing in yourself.

FROM BTS ARMY 💜

Have the most amazing birthday! 🎂🎉`;

let x=0;


function write(){

if(x<message.length){

letter.innerHTML += message[x]=="\n" ? "<br>" : message[x];

x++;

setTimeout(write,35);

}

}

write();

};


}


type();
