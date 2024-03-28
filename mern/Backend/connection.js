const mongoose = require('mongoose');
const url = "mongodb+srv://Rajtilakyadav:Rajamar123@cluster0.p8tngfn.mongodb.net/Mongo?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)

.then((result) => {
    console.log('conected to the database')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;