import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true
    },

    role: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Applied", "Interview", "Selected", "Rejected"],
      default: "Applied"
    },

    applicationDate: {
      type: Date,
      default: Date.now
    },

    link: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Internship = mongoose.model("Internship", internshipSchema);

export default Internship;