const admin=require("firebase-admin")
const credentials=JSON.parse(process.env.firebaseConfig)

admin.initializeApp({
    credential:admin.credential.cert(credentials),
    storageBucket:"genuity-development.firebasestorage.app",
})

const db=admin.firestore()
const bucket=admin.storage().bucket()

module.exports={admin,db,bucket}