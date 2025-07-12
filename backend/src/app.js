
// const express = require('express');
// const aiRoutes= require("./routes/ai.routes") 
// const app = express();
// app.use(express.json())
// app.get('/', (req, res) => {
//     res.send("works");
// });// route for get req
// app.use('/ai', aiRoutes)
// module.exports = app; //the moment we call the express a server is 'created' but does not starts

const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app