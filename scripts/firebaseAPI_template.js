//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCDUTnryD6zIJqmxwerjLYi_lt3x_9R4UM",
    authDomain: "fir-comp1800-202330-32333.firebaseapp.com",
    projectId: "fir-comp1800-202330-32333",
    storageBucket: "fir-comp1800-202330-32333.appspot.com",
    messagingSenderId: "387515216254",
    appId: "1:387515216254:web:7884629b2a7962800a032f"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();