import firebase from "firebase/app"
import 'firebase/storage'

const config={
    apikey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID   
}

const fire = firebase.initializeApp(config)
const storage = firebase.storage()

export {
    fire,
    storage,
    firebase //en caso requieran algun otro tipo de dato de firebase, lo pueden obtener de aqui
}