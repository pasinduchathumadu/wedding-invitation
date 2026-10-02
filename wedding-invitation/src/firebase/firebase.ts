
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Eef1RTnsyDkinYA-RQnNGlnAgI_lEXc",
  authDomain: "wedding-invitation-67f07.firebaseapp.com",
  projectId: "wedding-invitation-67f07",
  storageBucket: "wedding-invitation-67f07.firebasestorage.app",
  messagingSenderId: "194189249326",
  appId: "1:194189249326:web:a6a0ce1b4110b7c8e7c8bf",
  measurementId: "G-8R4P5DDNRV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
