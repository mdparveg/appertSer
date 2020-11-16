// import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyDxDn5g_krKeM4CTwRlLKntImVamyqghqQ",
//     authDomain: "appertment-f7ea1.firebaseapp.com",
//     databaseURL: "https://appertment-f7ea1.firebaseio.com",
//     projectId: "appertment-f7ea1",
//     storageBucket: "appertment-f7ea1.appspot.com",
//     messagingSenderId: "695104011659",
//     appId: "1:695104011659:web:f8484e5a14493ddc09438e"
// };

// export const auth = firebase.auth();
// export const storage = firebase.storage();

// export default firebaseConfig;

import firebase from "firebase";

const Config = firebase.initializeApp({
    apiKey: "AIzaSyDxDn5g_krKeM4CTwRlLKntImVamyqghqQ",
    authDomain: "appertment-f7ea1.firebaseapp.com",
    databaseURL: "https://appertment-f7ea1.firebaseio.com",
    projectId: "appertment-f7ea1",
    storageBucket: "appertment-f7ea1.appspot.com",
    messagingSenderId: "695104011659",
    appId: "1:695104011659:web:f8484e5a14493ddc09438e"
});

export const auth = firebase.auth();
export const storage = firebase.storage();

export default Config;