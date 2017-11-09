import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('notes')
//     .once('value')
//     .then((snapshot) => {
//         const notes = [];
//         snapshot.forEach((childSnapshot) => {
//             notes.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(notes);
//     });

// database.ref('notes').on('value', (snapshot) => {
//     const notes = [];
//     snapshot.forEach((childSnapshot) => {
//         notes.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(notes);
// });

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch(() => {
//     console.log('error');
// });

// database.ref().set({
//     name: 'Alex',
//     age: 30,
//     isSingle: true,
//     location: {
//         city: 'Riga'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('error', e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(function() {
//         console.log("Remove succeeded.")
//     })
//     .catch(function(error) {
//         console.log("Remove failed: " + error.message)
//     });

