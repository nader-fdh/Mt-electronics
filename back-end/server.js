const express = require("express");
// const ConnectDB = require("./helpers/ConnectDb");
const bodyParser = require("body-parser");
const cors = require("cors");
const Pusher = require("pusher");
const mongoose = require("mongoose");
// app config
require("dotenv").config();
const app = express();
const PORT = process.env.Port || 5000;

const pusher = new Pusher({
  appId: "1164600",
  key: "151d3de98e3e8038411a",
  secret: "686d53343cc6781d9a60",
  cluster: "eu",
  useTLS: true,
});
// Connect to DB
mongoose
  .connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db1 = require("./models");
const Role = db1.role;

// pusher trigger
const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");

  const msgCollection = db.collection("admins");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        lname: messageDetails.lname,
        fname: messageDetails.fname,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error triggering pusher");
    }
  });
});

// middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/devis-file", express.static(__dirname + "/devis-file"));

// define routers
// app.use("/register", require("./routes/register"));
// app.use("/login", require("./routes/login"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/product", require("./routes/product"));
app.use("/devis", require("./routes/devis"));
app.use("/chat/messages", require("./routes/messages"));
app.use("/img", require("./routes/upload"));
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
