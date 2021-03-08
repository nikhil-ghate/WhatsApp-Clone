import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNVUUCb2WIc1LCJztpUdMTcpRXVOQoLgs',
  authDomain: 'whats-app-clone-373c1.firebaseapp.com',
  projectId: 'whats-app-clone-373c1',
  storageBucket: 'whats-app-clone-373c1.appspot.com',
  messagingSenderId: '131907025960',
  appId: '1:131907025960:web:9a7781cf6f89f75b55891d',
  measurementId: 'G-CL9KY5NGZX'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export { auth, provider }
export default db
