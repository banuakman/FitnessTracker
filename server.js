const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

// concet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

// login middleware
app.use(logger("dev"));

// post request middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static folder
app.use(express.static("public"));

// routes
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes.js"));
app.listen(PORT, () => {
	console.log(`You are up & running on port ${PORT}!`);
});
