import express from 'express';
import { applyForJob, getApplications } from '../controllers/jobController.js';
import authSeller from '../middlewares/authSeller.js';

const jobRouter = express.Router();

jobRouter.post('/apply', applyForJob);
jobRouter.get('/list', authSeller, getApplications);

export default jobRouter;
