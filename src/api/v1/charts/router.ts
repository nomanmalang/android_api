import { Router } from "express";
import dataController from './data.controller';
const router: Router = Router();

router.get('/', dataController.getAllData);
router.get('/pie', dataController.getPieChartData);

export default router;