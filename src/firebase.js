// Importar la funcion de inicializacion de la app, local 
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" //varia según el servicio que consumamos

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig)

//1) Obtener una referencia de la db
export const db = getFirestore(app) //varia según el servicio que consumamos