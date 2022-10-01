import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBCT_IEAhZKktPp5QxNTg8SISsKOHNLJyU",
    authDomain: "cooking-site-4969f.firebaseapp.com",
    projectId: "cooking-site-4969f",
    storageBucket: "cooking-site-4969f.appspot.com",
    messagingSenderId: "209491708121",
    appId: "1:209491708121:web:c19e211745a4563a7916c8"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }