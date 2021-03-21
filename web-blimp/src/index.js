var firebaseConfig = {
    apiKey: "AIzaSyD5O5KdEYTpKVnqokjnG3pregy1KU1tmOk",
    authDomain: "blimp-8588d.firebaseapp.com",
    projectId: "blimp-8588d",
    storageBucket: "blimp-8588d.appspot.com",
    messagingSenderId: "796691090114",
    appId: "1:796691090114:web:c2f03c2e883bf17156c95b",
    measurementId: "G-9ZV16WQX5M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  
  
  
  function signUp(){
      
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    console.log(email+ " " + password)
    
    alert("Signed Up");
    //window.location.href="signin.html";
}
function userName(){

    /*var uEmail = document.getElementById('email').value;

    firebase.database().ref('users/'+ uEmail.replace('.','')).push({
        userEmail: document.getElementById('email').value,
        userName: document.getElementById('userName').value,
        userPassword: document.getElementById('password').value

    });*/

    if (document.getElementById('password').value.length >= 6){

        var uEmail = document.getElementById('email').value;

        firebase.database().ref('users/'+ uEmail.replace('.','')).push({
            userEmail: document.getElementById('email').value,
            userName: document.getElementById('userName').value,
            userPassword: document.getElementById('password').value
    
        });

    }
    else{
        console.log('short password')
    }

}



function find_userPassword(){
    firebase.database().ref('users/' + document.getElementById('email').value.replace('.','')).on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          
          data = childSnapshot.val();
    
          console.log(JSON.stringify(data.userPassword));
          console.log('$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$$%$%$%%$%$%$%$$%$%$')

          if (document.getElementById('password').value == JSON.stringify(data.userPassword).replace('"','').replace('"','')){
            window.location.href="result.html"
  
        }
        else{
            alert('Wrong Password Try Again')
        }
    
        });
    
      });


}

function signIn(){
      
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var useremail = document.getElementById("useremail");

    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    var emi = ("")
    emi += email.value;


    //useremail.innerHTML = ("User Email: " + email.value);
    alert(emi + "important");


}

function homepage(){
    console.log("home")

};
function handleSubmit () {
    const name = document.getElementById('email').value;
    //const surname = document.getElementById('surname').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    //sessionStorage.setItem("SURNAME", surname);

    return;
}



function signOut(){
      
    auth.signOut();
    alert("Signed Out");
    window.location.href="signin.html";
    
}
function profile(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    alert(email + " " + password);
  
}

var active_user = false;

auth.onAuthStateChanged(function(user){
      
    if(user){
        
        var email = user.email;
        alert("Active User " + email);
        active_user = true;
        console.log("User Connected");



        
        
        //Take user to a different or home page
        



        //is signed in
        
    }else{
        
        alert("No Active User");
        active_user = false;
        console.log("User Disconnected");
        //no user is signed in
    }
    
    
    
});

