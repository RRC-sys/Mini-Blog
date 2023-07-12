import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuUjJrWE9EYaxPaVihS4z5vGxTpwgWYto",
  authDomain: "miniblog-platform.firebaseapp.com",
  projectId: "miniblog-platform",
  storageBucket: "miniblog-platform.appspot.com",
  messagingSenderId: "946159449695",
  appId: "1:946159449695:web:e75bf6991fb5e7d470cdea"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }