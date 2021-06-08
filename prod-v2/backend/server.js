const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:3000","http://localhost:5000","http://localhost:27017"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    ); 
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
)
.then( () => {
    console.log("Connected To Mongo Db DataBase");
}).catch((err) => {
  console.log("DataBase Connection Error " + err);
})

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const regionRouter = require('./routes/region');
app.use('/region', regionRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});