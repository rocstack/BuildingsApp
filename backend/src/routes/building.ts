import { Router } from 'express';
import * as buildingController from '../controllers/building';

const router = Router();

router.get('/find', buildingController.getFindBuildings);

router.post('/add', buildingController.postAddBuilding);

export { router as buildingRoutes };
