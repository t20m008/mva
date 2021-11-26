/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: 'AIzaSyDqVG3gKZR1sQDLLKHf9oit_lVVjE4nB5o',
    authDomain: 'mva-fb-2eb01.firebaseapp.com',
    projectId: 'mva-fb-2eb01',
    storageBucket: 'mva-fb-2eb01.appspot.com',
    messagingSenderId: '380430565106',
    appId: '1:380430565106:web:d03b7124b5c8f082be5a6b',
    measurementId: 'G-J0JGDNBBCM',
  })
}
const firebase = {
  app: Firebase.app,
  auth: Firebase.auth,
  firestore: Firebase.firestore,
}

export default firebase
