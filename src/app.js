// import statements
import express from "express";
import path from "path";
import {home,about,contact,privacy} from "./controllers/page-controller.js"

// create an instance of express
const app = express();

	
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// GET route to serve the index.html file
app.get("/", home)
app.get("/about", about)
app.get("/contact", contact)
app.get("/privacy", privacy)

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
