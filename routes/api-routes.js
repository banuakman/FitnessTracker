const db = require("../models");
module.exports = function (app) {
	// GET /api/workouts - get all workouts
	app.get("/api/workouts", (req, res) => {
		db.Workout.aggregate([
			{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
		])
			.then((dbWorkout) => res.json(dbWorkout))
			.catch((err) => {
				res.json(err);
			});
	});
	// PUT /api/workouts/:id - addExercise
	app.put("/api/workouts/:id", (req, res) => {
		db.Workout.findByIdAndUpdate(
			req.params.id,
			{ $push: { exercises: req.body } },
			{ new: true }
		)
			.then((dbWorkout) => res.json(dbWorkout))
			.catch((err) => {
				res.json(err);
			});
	});
	// POST /api/workouts - createWorkout
	app.post("/api/workouts", (req, res) => {
		db.Workout.create(req.body)
			.then((dbWorkout) => {
				console.log(req.body);
				res.json(dbWorkout);
			})
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
