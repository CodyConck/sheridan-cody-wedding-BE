const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")

const express = require("express")
const query = require("./lib/query")
const controllers = require("./controllers")
const { configMongoose } = require("./mongoose")

const app = express()

app.configure = (func) => {
    func(app)
}

app.use(cors());
app.configure(controllers)
app.configure(configMongoose)
app.configure(query({ arrayLimit: 500 }))
// app.use(
//     cors({
//       origin: function (origin, callback) {
//         const whitelist = ['http://localhost:3000/'];
//         console.log(origin)
//         // allow requests with no origin
//         if (!origin) return callback(null, true);
//         if (whitelist.indexOf(origin) === -1) {
//           var message = 'Not Allowed';
//           return callback(new Error(message), false);
//         }
//         return callback(null, true);
//     }
//     })
//   );
  
  

app.use(express.json());

app.listen(5000, () => {
    console.log("Listening on port 5000")
})