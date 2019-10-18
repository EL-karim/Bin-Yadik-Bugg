import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var Config = {
    apiKey: "AIzaSyDf_lsnQ-paPALTuWWFZ3U_v2HSNTGKk6c",
    authDomain: "bin-yadik-demo.firebaseapp.com",
    databaseURL: "https://bin-yadik-demo.firebaseio.com",
    projectId: "bin-yadik-demo",
    storageBucket: "bin-yadik-demo.appspot.com",
    messagingSenderId: "452559017608",
    appId: "1:452559017608:web:d11b93cc7e538b13eff13d",
    measurementId: "G-M3NSQBKVR4"
};
// Initialize Firebase
firebase.initializeApp(Config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;