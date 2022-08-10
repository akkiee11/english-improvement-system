var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


var firebaseConfig = {
        apiKey: "AIzaSyB86HScYAk4_CR1f1MYDKpzNZgcQSm_IAU",
        authDomain: "upload-download-27cee.firebaseapp.com",
        projectId: "upload-download-27cee",
        storageBucket: "upload-download-27cee.appspot.com",
        messagingSenderId: "46795543745",
        appId: "1:46795543745:web:8a19699e2e986a768b3040",
        measurementId: "G-2P6SQ2LNL3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db=firebase.firestore();

    let sen_count=0;
    let count=0;
    let con_count=0;
     function selectAlldata(){
        let ansfinal=0;

    const email=localStorage.getItem('Email');
    document.getElementById("username").innerHTML = email;
    firebase.database().ref().child('word_basic').orderByChild('Email').equalTo(email)
      .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                  count++;
              }
          )
      });

    firebase.database().ref().child('basic_sentences').orderByChild('Email').equalTo(email)
    .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                  sen_count++;
                 
              }
          )
      });

    firebase.database().ref().child('conversation_basic_count').orderByChild('Email').equalTo(email)
      .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                con_count++;
                let ans=((count+sen_count+con_count)/2010)*100;
                ans=ans.toFixed(0)
                console.log(ans);
                document.getElementById("basic_progress").value = ans;

                document.getElementById("basic_prog").innerHTML = `${ans}% Complete`;

              }
          )
      });




      let i1=0,i2=0,i3=0;
      firebase.database().ref().child('word_intermediate').orderByChild('Email').equalTo(email)
      .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                  i1++;
              }
          )
      });

    firebase.database().ref().child('sentences_intermediate').orderByChild('Email').equalTo(email)
    .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                  i2++;
                 
              }
          )
      });

      firebase.database().ref().child('conversation_intermediate_count').orderByChild('Email').equalTo(email)
      .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                i3++;
                let ans=((i1+i2+i3)/2010)*100;
                ans=ans.toFixed(0);
                console.log(ans);
                document.getElementById("intermediate_progress").value = ans;
                document.getElementById("intermediate_prog").innerHTML = `${ans}% Complete`;

              }
          )
      });



      let i4=0,i5=0,i6=0;
 
      firebase.database().ref().child('word_advance').orderByChild('Email').equalTo(email)
      .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                  i4++;
              }
          )
      });

    firebase.database().ref().child('sentences_advance').orderByChild('Email').equalTo(email)
    .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                  i5++;
              }
          )
      }); 
      
      
      firebase.database().ref().child('conversation_advance_count').orderByChild('Email').equalTo(email)
      .once('value',
      function(Allrecord){
          Allrecord.forEach(
              function(CurrentRecord){
                i6++;
                let ans=((i4+i5+i6)/2010)*100;
                ans=ans.toFixed(0)
                console.log(ans);
                document.getElementById("Advanced_progress").value = ans;
                document.getElementById("Advanced_prog").innerHTML = `${ans}% Complete`;

                ansfinal = ((sen_count+count+con_count+i1+i2+i3+i4+i6)/6030)*100;
                ansfinal=ansfinal.toFixed(0);
                ansfinal++;
                document.getElementById("data-progress1").innerHTML = ansfinal;
                document.getElementById("progress").innerHTML = `${ansfinal}% Complete`;

                
                var bars = document.querySelectorAll(".meter > span");
                console.clear();
            
                setInterval(function () {
                bars.forEach(function (bar) {
                    var getWidth = ansfinal;
            
                    for (var i = 0; i < getWidth; i++) {
                    bar.style.width = i + "%";
                    }
                });
                }, 500);





              }
          )
      });








  }

console.log("final",count+sen_count);


window.onload=selectAlldata;
