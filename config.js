import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDl_okC28N-uBOImdX0aJQkvYyUStpCieA",
    authDomain: "supplies-218a4.firebaseapp.com",
    projectId: "supplies-218a4",
    storageBucket: "supplies-218a4.appspot.com",
    messagingSenderId: "311480227614",
    appId: "1:311480227614:web:8c4c694b09671be50b5b0f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();