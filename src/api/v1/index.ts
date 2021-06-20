import { Router } from "express";
import dataRoutes from './charts/router';

const router: Router = Router();

router.use('/charts', dataRoutes);

export default router;