import JobApplication from "../models/JobApplication.js";

// Submit Job Application : /api/job/apply
export const applyForJob = async (req, res) => {
    try {
        const { name, email, phone, role, experience, resumeUrl } = req.body;

        const application = new JobApplication({
            name, email, phone, role, experience, resumeUrl
        });

        await application.save();

        res.json({ success: true, message: "Application Submitted Successfully" });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Get All Applications (Admin Only) : /api/job/list
export const getApplications = async (req, res) => {
    try {
        const applications = await JobApplication.find({}).sort({ createdAt: -1 });
        res.json({ success: true, applications });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
