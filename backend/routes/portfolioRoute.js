const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
} = require("../models/portfolioModel");
const User = require("../models/userModel");

//Get all portfolioDagta
router.get("/getPortfolioData", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      projects: projects,
      contact: contacts[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req?.body?._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully.",
    });
  } catch (error) {
    console.log("intro-update ", error);
    res.status(500).send(error);
  }
});

//Update contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req?.body?._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully.",
    });
  } catch (error) {
    console.log("contact-update ", error);
    res.status(500).send(error);
  }
});

//Update about

router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About data updated successfully.",
    });
  } catch (error) {
    console.log("about- update ", error);
    res.status(500).send(error);
  }
});

//Add experince
router.post("/add-experience", async (req, res) => {
  try {
    const experince = new Experience(req.body);
    await experince.save();

    res.status(200).send({
      data: experince,
      success: true,
      message: "Experience data added successfully.",
    });
  } catch (error) {
    console.log("Experience- add ", error);
    res.status(500).send(error);
  }
});

//Update experince
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully.",
    });
  } catch (error) {
    console.log("Experience- update ", error);
    res.status(500).send(error);
  }
});

//delete experienc

router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({ _id: req.body._id });

    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully.",
    });
  } catch (error) {
    console.log("Experience- delete ", error);
    res.status(500).send(error);
  }
});

//Add Project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(200).send({
      data: project,
      success: true,
      message: "Project data added successfully.",
    });
  } catch (error) {
    console.log("Project- add ", error);
    res.status(500).send(error);
  }
});

//Update project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully.",
    });
  } catch (error) {
    console.log("Project- update ", error);
    res.status(500).send(error);
  }
});

//delete project

router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });

    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.log("Project- delete ", error);
    res.status(500).send(error);
  }
});

//Admin login

router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) user.password = "";

    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully.",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password.",
      });
    }
  } catch (error) {
    console.log("login error", error);
    message.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
