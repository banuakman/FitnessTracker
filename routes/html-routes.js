const path = require("path");
module.exports = (app) => {
	//index.thml
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	//exercise.html
	app.get("/exercise", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});
	//stats.html
	app.get("/stats", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});
};
