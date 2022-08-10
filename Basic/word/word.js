let wordCount = 0;
const totalWords = words.length;
var count = 0;
function selectAlldata() {
  const email=localStorage.getItem('Email');
  firebase.database().ref().child('word_basic').orderByChild('Email').equalTo(email)
  .once('value',
    function (Allrecord) {
      Allrecord.forEach(
        function (CurrentRecord) {
          var accuracy = CurrentRecord.val().accuracy;
          var wordSpoken = CurrentRecord.val().wordSpoken;
          var wordToSpeak = CurrentRecord.val().wordToSpeak;
          console.log(accuracy, wordSpoken, wordToSpeak);
          count++;
          console.log("Count is ", count);
        }
      )
      console.log("abcd ", count);

      window.wordToSpeak = getRandomWord();

      document.getElementById('first-word').innerText = window.wordToSpeak;
    });

}


// window.lastAccuracy = 0;
// window.lastWord = words[0];

const getRandomWord = () => {

  let w;
    w = words[count % totalWords];
    count++;


  return w;
}


const showNewWord = () => {
  window.wordToSpeak = getRandomWord();
  botmessage("BOT", "https://image.flaticon.com/icons/svg/327/327779.svg", "left", `New word : ${window.wordToSpeak}`);
}

window.onload = selectAlldata;