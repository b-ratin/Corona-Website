// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDEy5GI41Ul6HTzZQZqVIsECgv9MdrGQ_4",
    authDomain: "corona-test-form.firebaseapp.com",
    databaseURL: "https://corona-test-form-default-rtdb.firebaseio.com",
    projectId: "corona-test-form",
    storageBucket: "corona-test-form.appspot.com",
    messagingSenderId: "55448767728",
    appId: "1:55448767728:web:898e9e093873008c704635"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var userInputsRef= firebase.database().ref("userInput");
  document.getElementById("testForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    var fname= getInputVal("firstname");
    var lname= getInputVal("lastname");
    var mobile= getInputVal("mobile");
    var profession= getInputVal("profession");
    var dateofbirth= getInputVal("dateofbirth");
    var email= getInputVal("email");
    var state= getInputVal("state");
    state=state.toLowerCase();
    var name= fname+" "+lname
    readState(state);
    saveState(name,mobile,profession,dateofbirth,email,state);
}

function readState(state){
    var senders;
    var ref = firebase.database().ref(state);
    ref.on("value", (data)=>{
        senders=data.val();
        document.getElementById("result").innerHTML="<br>"+senders.toUpperCase();
    });
    alert("Thank You for submitting.\nFind the list of centers nearby:\n"+senders.toUpperCase());
}

function getInputVal(userInput2){
    return document.getElementById(userInput2).value;
}

function saveState(name,mobile,profession,dateofbirth,email,state){
    var newUserInputsRef= userInputsRef.push();
    newUserInputsRef.set(
        {
            name:name,
            mobile:mobile,
            profession:profession,
            dateofbirth:dateofbirth,
            email:email,
            state:state,
        }
    );
    document.getElementById("result").innerHTML="";
    clearData("fname");
    clearData("lname");
    clearData("mobile");
    clearData("profession");
    //clearData("datofbirth");
    clearData("email");
    clearData("state");
    //alert("Thank You for submitting.\nFind the list of centers nearby:\n");
}

function clearData(id){
    document.getElementById(id).value="";
}