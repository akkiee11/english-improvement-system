

//----------------------Ready--------------------------------/

const email=localStorage.getItem('Email');
console.log(email);

function InsertWord(wordtospeak,wordspoken,accuracy){
let id=Math.random().toString(36).substr(2, 9);
firebase.database().ref('word_intermediate/'+id).set({
      id:id,
      wordToSpeak : wordtospeak,
      wordSpoken :wordspoken,
      accuracy:accuracy,
      Email: email
  });
}

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch (e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}

var noteContent = '';

const getAccuracy = (givenWord, wordSpoken) => {
  givenWord=givenWord.toLowerCase();
  wordSpoken=wordSpoken.toLowerCase();
  const body = {
    "word": givenWord,
    "wordSpoken": wordSpoken
  }

  fetch("http://localhost:8080/getAccuracy", {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json())
    .then(res => {
      let accuracyInPercentage = (res.accuracy * 10000) / 100;
      window.lastAccuracy = accuracyInPercentage;
     let accuracyMessage =  `Accuracy: ${accuracyInPercentage.toFixed(2)}%`;
     let cls = 'left-happy-msg';
      if (accuracyInPercentage < 50) {
        cls =  `left-danger-msg`;
      }
      Acurracymessage("right",accuracyMessage,cls);
      let accuracy1=accuracyInPercentage.toFixed(2);
       InsertWord(givenWord,wordSpoken,accuracy1);
        console.log("Insert Succesfully");
      
    }).then(res => {
      showNewWord();
    })
    .catch(err => {
      console.error(err);
    })
}

/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function (event) {
  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
  console.log("LIVE : ", transcript);
  if (!mobileRepeatBug) {
    noteContent += transcript;
  }
  document.getElementById('word-spoken').value = transcript;
};

recognition.onstart = function () {
  console.log('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function () {
  console.log('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function (event) {
  if (event.error == 'no-speech') {
    console.log('No speech was detected. Try again.');
  };
}

/*-----------------------------
      App buttons and input 
------------------------------*/

$('#start-record-btn').on('click', function (e) {
  recognition.start();
  document. getElementById('start-record-btn'). style. backgroundColor = '#5cb85c';
  let time = 5;
  let myInterval = setInterval(() => {
    document.getElementById("timer").innerText = `Listening.. ${time}`;
    time = time - 1;
  }, 1000);

  setTimeout(() => {
    recognition.stop();
    document. getElementById('start-record-btn'). style. backgroundColor = '#0275d8';
    clearInterval(myInterval);
    document.getElementById("timer").innerText = 'Click to start';
    console.log("WORD SPOKEN : ", noteContent);

    //NEED TO REPLACE WOTH ACTUAL CONTENYT
    // noteContent = "NOTECONTENT";
    Usermessage(
      "User",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.androidfreeware.net%2Fimg2%2Ftalking-tom-cat-2.png&f=1&nofb=1",
      "right",
      noteContent);

    getAccuracy(window.wordToSpeak, noteContent);
    noteContent = '';
    document.getElementById('word-spoken').value = noteContent;
  }, time * 1000);
});
