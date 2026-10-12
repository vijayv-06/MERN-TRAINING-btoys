import express from "express";

import {
  createInternship,
  getInternships,
  getInternshipById,
  updateInternship,
  deleteInternship
} from "../controllers/internshipController.js";

const router = express.Router();

// Create internship
router.post("/", createInternship);

// Get all internships
router.get("/", getInternships);

// Get internship by ID
router.get("/:id", getInternshipById);

// Update internship
router.put("/:id", updateInternship);

// Delete internship
router.delete("/:id", deleteInternship);

export default router;