import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_O6pSDOQHoJX88Dtd9YIrH-iM52i_Wbk",
    authDomain: "flynow-80c3a.firebaseapp.com",
    projectId: "flynow-80c3a",
    storageBucket: "flynow-80c3a.appspot.com",
    messagingSenderId: "881028651021",
    appId: "1:881028651021:web:65d8a6bcce027b9c8b1d44"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)