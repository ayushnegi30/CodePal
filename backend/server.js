// require('dotenv').config() // helps to access the api key in env file
// const app = require('./src/app')
// app.listen(3000,()=>{
//     console.log('server is running on http://localhost:3000')
//  }); // the callback fun runs after the ports starts

require('dotenv').config()
const app = require('./src/app')



// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
