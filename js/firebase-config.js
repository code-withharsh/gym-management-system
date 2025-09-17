var firebaseConfig = {
  apiKey: "AIzaSyC7KLwhkH1jNP5Ll1YKPeQZaxsXZuv3rfo",
  authDomain: "gym-management-system-2948a.firebaseapp.com",
  projectId: "gym-management-system-2948a",
  storageBucket: "gym-management-system-2948a.firebasestorage.app",
  messagingSenderId: "542338164867",
  appId: "1:542338164867:web:17429ee520440f79bb93b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ global variables
const auth = firebase.auth();
const db = firebase.firestore();
