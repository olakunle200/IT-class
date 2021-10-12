const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const storeSession = require("connect-mongodb-session")(session);
const app = express();
// const csrf = require("csurf");

const morgan = require("morgan");
const path = require("path");
const mongoose = require('mongoose');

const MONGODB_URI =  "mongodb://localhost:27017/SRMS";

const port = process.env.PORT || 8000;

const store = new storeSession({
    uri: MONGODB_URI,
    collection: "sessions",
});
// const csrfProtection = csrf();
app.use(flash());


//set location of your routes to your server
const studentRoutes = require("./routes/student.routes");
const sLoginRoutes = require("./routes/studentloginpage.routes");
const adminRoutes = require("./routes/admin.routes");

const authRoutes = require("./routes/auth.routes");



//mongoose
// "mongodb://kunle:12345@srms.pchox.mongodb.net/SRMS?retryWrites=true&w=majority"
mongoose
    .connect(MONGODB_URI, {
     useUnifiedTopology: true,
     useNewUrlParser: true,
 })
 .then(()=>{
     console.log("database connected successfully");
     app.listen(port,()=>{
        console.log(`my server is running on ${port}`);
     });
 })
    // mongoose
    // .connect( dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    // .then((result) => app.listen(3008))
    // .catch((err) => {
    //     console.log(err);
    // });





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

app.set("view engine", "ejs"); // template engine
app.set("views", path.join(__dirname, "views")); // setting views directory
app.use(express.static(path.join(__dirname, "public"))); // static files directory
app.use(
    session({
        secret: "Kunle is mad",
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);
// app.use(csrfProtection);

app.use((req, res, next) =>{
    if(!req.session.user){
        return next();
    }
    User.findById(req.session.user._id)
     .then((user) =>{
         req.user = user;
         next();
     })
     .catch((err) =>{
         console.log(err);
     });
});
app.use((req, res, next) =>{
    res.locals.isAuthenticated = req.session.isLoggedIn;
    // res.locals.csrfToken = req.csrfToken();
    next();
})


const homeController = require("./controllers/home.controllers");
const User = require("./models/User");
// const flash = require("connect-flash/lib/flash");




 
//what use use to accesss the pages



app.use("/student", studentRoutes);
app.use("/slogin", sLoginRoutes);
app.get("/", homeController.homepage);


 
app.use("/adminDB", adminRoutes);


app.use("/login", authRoutes);


// app.listen(()=>{console.log(`my server is running ${port}`)})