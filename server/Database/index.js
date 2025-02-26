const {connect, Schema} = require("mongoose")

const db = 'Spooler'
const dbUri = `mongodb://localhost:27017/${db}`


connect(dbUri)
.then(() => {
console.log("connected to DB")
})
.catch((err) => {
console.error('Could not connect to DB', err)
})