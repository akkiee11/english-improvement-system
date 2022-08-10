const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Hello Word",
  "Good Morning",
  "Good Evening",
  "Beautiful",
  "Good"
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "bot_image.jpg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "User";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  Usermessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  // setTimeout(botResponse,5000);
  // botResponse();
});

function Usermessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div id="word-spoken2" class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function Acurracymessage(side, text,cls) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-a ${cls}">
     
        <div id="word-to-speak2" class="msg-text1">${text}</div>
     
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}



function botmessage(name, img, side, text,cls) {
  //   Simple solution for small apps
  // responsiveVoice.speak(text,'US English Female');

  const msgHTML = `
    <div class="msg ${side}-msg ${cls}">
      <div class="msg-img" style="background-image: url('bot_image.jpg')"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
       <div class="msg_line">
       <div id="word-to-speak2" class="msg-text1">${text}</div>
       <button  onclick="responsiveVoice.speak('${text}','US English Female');" 
        type="button" value="Play" class="voice_play">
        <i class="fas fa-play-circle"></i>
          </button>
       </div>
      </div>
    </div>
    
  `;

  

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    botmessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
