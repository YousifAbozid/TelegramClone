import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBp1gqgHfjgKWI8rKqqZ3QfW8y50BhSGy8",
  authDomain: "telegram-b47cf.firebaseapp.com",
  databaseURL: "https://telegram-b47cf.firebaseio.com",
  projectId: "telegram-b47cf",
  storageBucket: "telegram-b47cf.appspot.com",
  messagingSenderId: "616350034276",
  appId: "1:616350034276:web:1facabbac4947e4b58f271"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default database