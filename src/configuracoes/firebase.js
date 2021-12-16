import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import {getAuth} from 'firebase/auth';
import { createContext } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyCdN1WsH7agQb0ZZm4rAhThy32-HmY0x2w",
  authDomain: "pweb-69be9.firebaseapp.com",
  projectId: "pweb-69be9",
  storageBucket: "pweb-69be9.appspot.com",
  messagingSenderId: "517444776352",
  appId: "1:517444776352:web:0356289957dd82d10974c5",
  measurementId: "G-GYRLEPEQZ6"
};

const app = initializeApp(firebaseConfig);

export const AuthContext = createContext;

export const db = getFirestore(app);

export const auth = getAuth(app);



