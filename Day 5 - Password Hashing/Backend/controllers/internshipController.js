import Internship from "../models/Internship.js";

// CREATE internship
export const createInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);

    res.status(201).json({
      message: "Internship created successfully",
      internship
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create internship",
      error: error.message
    });
  }
};

// GET all internships
export const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find();

    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch internships",
      error: error.message
    });
  }
};

// GET one internship
export const getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        message: "Internship not found"
      });
    }

    res.status(200).json(internship);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch internship",
      error: error.message
    });
  }
};

// UPDATE internship
export const updateInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!internship) {
      return res.status(404).json({
        message: "Internship not found"
      });
    }

    res.status(200).json({
      message: "Internship updated successfully",
      internship
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update internship",
      error: error.message
    });
  }
};

// DELETE internship
export const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);

    if (!internship) {
      return res.status(404).json({
        message: "Internship not found"
      });
    }

    res.status(200).json({
      message: "Internship deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete internship",
      error: error.message
    });
  }
};