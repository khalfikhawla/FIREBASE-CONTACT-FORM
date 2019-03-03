 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCSV0nBr0LHsxH6q3Oa0fSFMa6Ow9FoGEI",
    authDomain: "contact-form-kh.firebaseapp.com",
    databaseURL: "https://contact-form-kh.firebaseio.com",
    projectId: "contact-form-kh",
    storageBucket: "contact-form-kh.appspot.com",
    messagingSenderId: "1008766806106"
  };
  firebase.initializeApp(config);



  //-----------------------------------------------------
  // Initialize Firebase (ADD YOUR OWN DATA)
// var config = {
//     apiKey: "xxxxx",
//     authDomain: "xxxxx",
//     databaseURL: "xxxxx",
//     projectId: "xxxxx",
//     storageBucket: "xxxxx",
//     messagingSenderId: "xxxxx"
//   };
//   firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var messages = getInputVal('messages');
  
    // Save message
    saveMessage(name, email, phone, messages);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name , email, phone, messages){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:messages,
    });
  }


  ///////////////////////////////////
 