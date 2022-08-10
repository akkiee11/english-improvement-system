let currentBotWord = 0;
let currentUserWord = 1;
let currentConvId = 0;
let currnetWordId = 0;
let totalWords = words[currentConvId].length;
const totalcon = words.length;

// let isBotsTurn = true;

// let currentConversationId = 0;
// let currentBotSentenceId = 0;
// let currentUserSentenceId = 1;
// let sId = 0;


// const changeTurn = () => {
//   isBotsTurn = !isBotsTurn;
// }

// const getBotWord = () => {
//   let word = words[currentConversationId][currentBotSentenceId];
//   currentBotSentenceId += 2;
//   return word;
// }

// const getUserWord = () => {
//   let word = words[currentConversationId][currentUserSentenceId];
//   currentBotSentenceId += 2;
//   return word;
// }

const getRandomWord = () => {
  if (currentConvId != 0 && currentBotWord == 0) {
    Insertcount();
    alert("completeted Conversation");
  }
  console.log("INI-1" + currnetWordId);
  let w = words[currentConvId % totalcon][currentBotWord];
  currentBotWord += 2;
  currnetWordId++;
  console.log("INI-2" + currnetWordId);
  return w;
}

const getRandomUserResponce = () => {
  console.log("INI-3" + currnetWordId);
  let w = words[currentConvId % totalcon][currentUserWord];
  let length = words[currentConvId % totalcon].length;
  currentUserWord += 2;
  currnetWordId++;
  console.log(`--------------------CurrentConvId = ${currentConvId}--currnetWordId--${currnetWordId}--`)
  if (w == words[currentConvId % totalcon][length - 1]) {
    currentConvId++;
    currnetWordId = 0;
    currentBotWord = 0;
    currentUserWord = 1;
  }
  return w;
}



window.wordFromBot = getRandomWord();
window.wordToSpeak = getRandomUserResponce();

const DisplayFirstWord = () => {
  const botFirstMsg = window.wordFromBot;
  const UserFirstMsg = window.wordToSpeak;
  botmessage(BOT_NAME, BOT_IMG, "left", botFirstMsg, UserFirstMsg);

}

const welcom_message = document.getElementById("welcom-message").innerText;
responsiveVoice.speak(welcom_message, 'US English Female');
setTimeout(DisplayFirstWord, 13000);

const showNewWord = () => {
  window.wordFromBot = getRandomWord();
  window.wordToSpeak = getRandomUserResponce();
  botmessage("BOT", "https://image.flaticon.com/icons/svg/327/327779.svg", "left", `${window.wordFromBot}`, `${window.wordToSpeak}`);
}


function Insertcount(){
  let id=Math.random().toString(36).substr(2, 9);
  firebase.database().ref('conversation_advance_count/'+id).set({
        id:id,
        Email:email
    });
  }
