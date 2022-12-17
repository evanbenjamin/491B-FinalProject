
//libraries needed for using firebase. Evan
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';

import {getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

//used to initialize the firestore cloud database. Evan
const firebaseApp = initializeApp({

    apiKey: "AIzaSyAdE8JFtixKAJknep1DlyTRjtidMFk_MhU",
  
    authDomain: "liteboard-798d8.firebaseapp.com",
  
    projectId: "liteboard-798d8",
  
    storageBucket: "liteboard-798d8.appspot.com",
  
    messagingSenderId: "186017815358",
  
    appId: "1:186017815358:web:001c478dbda00d8ee32a6f",
  
    measurementId: "G-L7MVC4WJ6T"
  
  });

  //gets database from cloud database. Evan
  const db=getFirestore();

  //create random id using letters and numbers. Evan
  const userId=Math.random().toString(36).slice(2);

  //gets collection from database. Evan
  const new_user=doc(db, 'Users/'+userId);

  //take in document information by getting their id in the html file. Evan
  const fname=document.getElementById("fname");
  const lname=document.getElementById("lname");
  const email=document.getElementById("email");
  const usertype=document.getElementById("usertype");
  const school=document.getElementById("school");
  const username=document.getElementById("username");
  const password=document.getElementById("password");
  const submit=document.getElementById("submit");

  //event listener for the submit button.  The function is run once the submit button is clicked. Evan
  submit.addEventListener('click', () =>{

    //this object is initialized to the values from the webpage through the values in the input tags. Evan
    const docData={
      fname: fname.value,
      lname: lname.value, 
      email: email.value, 
      usertype: usertype.value, 
      school: school.value, 
      username: username.value,
      password: password.value,
    };

    //sends information to the firebase, first parameter is the collection, second is the users id. Evan
    setDoc(new_user, docData);


    setTimeout(()=>{window.location.assign("login.html")}, 1000);
    
  });

  


  

  
