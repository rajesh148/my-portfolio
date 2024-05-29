const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeTxt: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    requried: true,
  },
});

const aboutSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
  },

  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },

  period: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
  },

  link: {
    type: String,
  },

  technologies: {
    type: Array,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
