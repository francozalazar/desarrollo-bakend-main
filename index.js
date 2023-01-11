import express from "express";
import MongoStore from "connect-mongo";

//Middlewares
import router from "./routers/index.js";
import {errorHandler} from "./utils/errors.js";
import bodyParser from 'body-parser';
import path from "path";

//Middlewares Sessions
import passport from "./middlewares/passport.js";
import expressSession from "express-session";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join("./", "static")))

//Sesiones
app.use(expressSession({
  store: new MongoStore({
    mongoUrl: process.env.MONGO_URL,
    ttl: 600
  }),
  secret: "shhh",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router)

app.get("/", (req, res) => {
  res.redirect("/api")
})

app.set("views", "./views");
app.set("view engine", "pug");
app.use(errorHandler)

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
})
