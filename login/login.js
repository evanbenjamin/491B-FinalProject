//imports libraries necessary for firestore cloud database. Evan

import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';

import { getFirestore, collection, getDocs} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

//initializes database. Evan
const firebaseApp = initializeApp({

    apiKey: "AIzaSyAdE8JFtixKAJknep1DlyTRjtidMFk_MhU",
  
    authDomain: "liteboard-798d8.firebaseapp.com",
  
    projectId: "liteboard-798d8",
  
    storageBucket: "liteboard-798d8.appspot.com",
  
    messagingSenderId: "186017815358",
  
    appId: "1:186017815358:web:001c478dbda00d8ee32a6f",
  
    measurementId: "G-L7MVC4WJ6T"
  
});

//take in document information by getting their id in the html file. Evan
const username=document.getElementById("username");
const password=document.getElementById("password");
const result=document.getElementById("result");
const submitlogin=document.getElementById("submitlogin");

//gets database from cloud database. Evan
const db=getFirestore();

//gets a reference from the collection named in the cloud storage. Evan
const docRef=collection(db, 'Users');

//array to hold all sub collections in collection called. Evan
let info=[];

//gets document from docRef variable. Evan
getDocs(docRef).then((snapshot) =>{
    
    snapshot.docs.forEach((doc) =>{
        //puts document information into infor array. Evan
        info.push({...doc.data()})
    })

}).catch(err =>{
    //error message outputed if something went wrong. Evan
    console.log(err.message)
})

//function to check credentials.  Eventually this information will be pulled from a database, for now its this.  Evan 
function checkCredentials(){

    let enter=0;
    for(let i=0; i<info.length;i++){
     

        if(username.value==info[i].username && password.value==info[i].password){
            //If the username is correct, you are allowed in, increments enter by 1
            enter=1;
        }
    }
    //checks username from login screen against username pulled from cloud database. Evan
    
    //must hav ea value of 1 to enter
    if(enter==1){
        result.textContent = "Have fun drawing";
        window.location.assign("http://ec2-18-144-86-245.us-west-1.compute.amazonaws.com:8080/?whiteboardid=myNewWhiteboard");
    }

    else{
        result.textContent = "One or both credentials was wrong, try again";
    }


    
}

//listens for the user to click on the submitlogin button. Evan
submitlogin.addEventListener('click', checkCredentials);

