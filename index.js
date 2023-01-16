const express = require('express')
const mongo = require('mongoose')
const PORT = process.env.PORT || 5000
const authRouter = require('./authRouter')
const urlForConnect = 'mongodb+srv://miraplay:Miraplay169@cluster0.940itxn.mongodb.net/miraplay?retryWrites=true&w=majority'
var cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())
app.use('/auth', authRouter)


const start = async () => {
    try {
        await mongo.connect(urlForConnect)
        app.listen(PORT, () => console.log("server started"))
    } catch (error) {
        console.log(error);
    }
}
start()