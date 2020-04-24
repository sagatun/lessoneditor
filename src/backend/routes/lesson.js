const router = require("express").Router();
let Lesson = require("../models/lesson.model");

router.route("/").get((req, res) => {
  Lesson.find()
    .then(lessons => res.json(lessons))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const lesson = req.body;

  const newLesson = new Lesson({ lesson });

  newLesson
    .save()
    .then(() => res.json("Lesson added"))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
