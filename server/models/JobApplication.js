import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    experience: { type: String, required: true },
    resumeUrl: { type: String }, // Can be a link to a file or just text for now
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const JobApplication = mongoose.models.jobApplication || mongoose.model('jobApplication', jobApplicationSchema);

export default JobApplication;
