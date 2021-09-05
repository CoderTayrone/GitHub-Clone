import firebase from "firebase/compat/app"
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZiyXXyf83Cz783XcphLeQj-H_OUXXxbs",
  authDomain: "logingit-70279.firebaseapp.com",
  projectId: "logingit-70279",
  storageBucket: "logingit-70279.appspot.com",
  messagingSenderId: "443303003581",
  appId: "1:443303003581:web:2f670b03f4a89255973ed4",
  measurementId: "G-7C0EVQY4GG"
};

firebase.initializeApp(firebaseConfig);

export default firebase