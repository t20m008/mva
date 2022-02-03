import firebase from './firebase'

const AccessLogCollection = 'access'

function getUniqueStr(myStrong) {
  let strong = 1000
  if (myStrong) strong = myStrong
  return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}

function recordAccess() {
  // console.log(firebase.auth().currentUser.email)

  firebase
    .firestore()
    .collection(AccessLogCollection)
    .doc(firebase.auth().currentUser.email.replace('@mail.ryukoku.ac.jp', '') + '#' + getUniqueStr(811))
    .set({
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      locale: new Date().toLocaleString(),
      href: window.location.href,
      timestamp: Date.now(),
    })
    .then(() => {
      // console.log('Document successfully written!')
    })
}

export default (context, inject) => {
  inject('recordAccess', recordAccess)
}
