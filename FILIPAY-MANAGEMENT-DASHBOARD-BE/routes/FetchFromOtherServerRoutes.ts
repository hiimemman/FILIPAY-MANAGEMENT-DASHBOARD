import { Router } from 'express';
import { GetAllEmployees } from '../controllers/FetchFromOtherServerController';

const FetchFromOtherServerRoutes = Router();

FetchFromOtherServerRoutes.get('/fetch/employee', GetAllEmployees);

export default FetchFromOtherServerRoutes;