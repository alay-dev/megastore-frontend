import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCwIV0uKBSehLkuA8YzMFUObHK1PyO4_V8",
  authDomain: "mega-store-961f3.firebaseapp.com",
  projectId: "mega-store-961f3",
  storageBucket: "mega-store-961f3.appspot.com",
  messagingSenderId: "991714447297",
  appId: "1:991714447297:web:a6686dd6203a87fc886940",
};
// Initialize Firebase

// export const facebookProvider = firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebaseConfig;
