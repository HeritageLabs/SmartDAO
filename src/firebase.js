// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore, addDoc, collection, serverTimestamp, onSnapshot, query,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const createUser = async (wallet_address) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, `${wallet_address}@gmail.com`, wallet_address)
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      wallet_address,
      authProvider: "local",
      email: `${wallet_address}@gmail.com`,
    });
  } catch (error) {
    console.error(error);
    // toaster.danger(error.message, { id: 'mess' });
  }
}

const signIn = async (wallet_address) => {
  try {
    await signInWithEmailAndPassword(auth, `${wallet_address}@gmail.com`, wallet_address)
      .then((res) => res)
      .catch((err) => {
        if (err.code) {
          return createUser(wallet_address)
        }
      });
  } catch (error) {
    console.error(error);
  }
};
const sendMessage = async (message, setMessage, proposalId, user, toastMessage) => {
  if (message.trim() === "") {
    alert("Enter valid message");
    return;
  }
  if (user) {
    setMessage("");
    await addDoc(collection(db, "proposals", proposalId, 'messages'), {
      text: message.trim(),
      name: user.displayName,
      avatar: user.photoURL,
      createdAt: serverTimestamp(),
      uid: user.uid,
    });
  } else {
    toastMessage("error", "Please connect wallet first");
  }
};

const logoutFirebase = async () => {
  signOut(auth);
}

function getMessages(proposalId, callback) {
  return onSnapshot(
    query(
      collection(db, 'proposals', proposalId, 'messages'),
      orderBy('timestamp', 'asc')
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      callback(messages);
    }
  );
}

export { db, auth, googleProvider, analytics, createUser, signIn, sendMessage, logoutFirebase, getMessages }