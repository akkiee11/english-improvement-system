function myFunction() {
  getAccuracy();
}


const getAccuracy = () => {
  

  selectElement =  document.querySelector('#cars');
  output = selectElement.value;
  

  const body = {
    "word": output,
    "wordSpoken": output
  }

  fetch("http://localhost:8080/getBooks", {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {"Content-Type": "application/json"}
  }).then(response => response.json())
    .then(res => {
      console.log(res, "-----")
      window.chats.push({
        from:"accuracy",
        text:res.accuracy
      })

      document.getElementById("main").innerHTML = "";

      document.getElementById("for-chat").innerHTML = "";

      var h = document.createElement("H1")                // Create a <h1> element
      var t = document.createTextNode("Top Five Recommended Books");     // Create a text node
      h.appendChild(t);
      document.getElementById("main").appendChild(h);

      var x = document.createElement("HR");
      x.classList.add("hrstyle");
      document.getElementById("main").appendChild(x);



      var div = document.createElement("div");
      div.classList.add("mystyle");
      div.innerHTML = res.accuracy;
      document.getElementById("for-chat").appendChild(div);

      var div = document.createElement("div");
      div.classList.add("mystyle");
      div.innerHTML = res.accuracy1;
      document.getElementById("for-chat").appendChild(div);

      var div = document.createElement("div");
      div.classList.add("mystyle");
      div.innerHTML = res.accuracy2;
      document.getElementById("for-chat").appendChild(div);

      var div = document.createElement("div");
      div.classList.add("mystyle");
      div.innerHTML = res.accuracy3;
      document.getElementById("for-chat").appendChild(div);

      var div = document.createElement("div");
      div.classList.add("mystyle");
      div.innerHTML = res.accuracy4;
      document.getElementById("for-chat").appendChild(div);


    }).catch(err => {
      console.error(err);
    })
}


