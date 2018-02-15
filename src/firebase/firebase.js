import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }



// // child_removed

// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     })


// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     })

// database.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     })

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         });

// //         console.log(expenses);
// //     });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         });

// //         console.log(expenses);
// //     })

// // database.ref('expenses').push({
// //     description: 'Gum',
// //     note: '',
// //     amount: 195,
// //     createdAt: 0
// // })


// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'Some tech'
// // })

// // database.ref()
// //     .on('value', (snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     });

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Fetching data error', e)
// //     });

// // test connection
// // database.ref().set({
// //     name: 'Jag Chumber',
// //     age: 35,
// //     stressLevel: 6,
// //     job :  {
// //         title: 'Tech',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'bedford',
// //         country: 'United Kingdom'
// //     }
// // }).then(() => {
// //     console.log('complete')
// // }).catch((e) => {
// //     console.log('this failed', e)
// // });


// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'London'
// // });
