const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./Route/index');
const dotenv = require("dotenv");
const passport = require("passport");
const cookieSession = require("cookie-session");


const Port = 5500;
const Hostname = "localhost";
// const paymentRoute = require("./Controller/payment");
// const authRoute = require("./Controller/auth");
// const passportSetup = require("./Controller/passport");

const corsOptions = {
    origin : 'http://localhost:3000',
    credentials : true,
    optionSuccessStatus : 200
}

dotenv.config();

//Request Management
const app = express();
app.use(cookieSession({ name: "session", keys:["edureka"], maxAge: 24*60*60*1000 }))
app.use(express.json());   // A body parser required to post a data
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
 app.use('/', route);
// app.use('/api/payment/', paymentRoute);
// app.use('/auth', authRoute);

//const localDbUrl = "mongodb://127.0.0.1:27017/Zomato";

//DB
const MongoAtlas = "mongodb+srv://jayakhatke:ewK2Ni64PC6DjLiS@cluster0.iyn9gh9.mongodb.net/Swiggy?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MongoAtlas, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
   .then(res=>
    app.listen(Port, Hostname, () =>{
        console.log(`server is running at ${Hostname} : ${Port}`)
    })
   )
   .catch(err => console.log(err));