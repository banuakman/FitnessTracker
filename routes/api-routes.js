const db = require("../models");
module.exports = function (app) {
	// GET /api/workouts - get all workouts
	app.get("/api/workouts", (req, res) => {
		db.Workout.find({})
			.then((dbWorkout) => res.json(dbWorkout))
			.catch((err) => {
				res.json(err);
			});
	});
	// PUT /api/workouts/ - addExercise
	app.put("/api/workouts/", ({ body }, res) => {
		db.Workout.insert(body)
			.then((dbWorkout) => res.json(dbWorkout))
			.catch((err) => {
				res.json(err);
			});
	});
	// POST /api/workouts - createWorkout
	app.post("/api/workouts/", ({ body }, res) => {
		db.Workout.insert(body)
			.then((dbWorkout) => res.json(dbWorkout))
			.catch((err) => {
				res.json(err);
			});
	});

	// GET /api/workouts/range - getWorkoutsInRange
	app.get("/api/workouts/range", ({ body }, res) => {
		db.Workout.insert(body)
			.then((dbWorkout) => res.json(dbWorkout))
			.catch((err) => {
				res.json(err);
			});
	});
};
