const mongoose = require("mongoose");
const array = require("mongoose");

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  course: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true,
    trim: true
  },

  author: {
    type: String,
    trim: true
  },

  level: {
    type: Number
  },

  translator: {
    type: String,
    trim: true
  },

  topic: {
    type: Array,
    contentType: String
  },

  subject: {
    type: Array,
    contentType: String
  },

  grade: {
    type: Array,
    contentType: String
  },

  /*yml: {
    data: Buffer,
    contentType: String
  },*/

  submitted: {
    type: Boolean
  }
  /* Legger dette til etterhvert
  img: {
    data: Buffer,
    contentType: String
  },

  lesson: {
    data: Buffer,
    contentType: String,
    required: true
  }*/
});

const LessonModel = mongoose.model("Lesson", lessonSchema);

module.exports = LessonModel;
