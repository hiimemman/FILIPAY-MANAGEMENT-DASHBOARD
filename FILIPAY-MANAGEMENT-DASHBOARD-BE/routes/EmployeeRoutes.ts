import { Router } from 'express';
import { AddNewEmployeeFilipayServerController, GetAllEmployeesController, GetAllEmployeesFilipayServerController, UpdateEmployeeFilipayServerController } from '../controllers/EmployeeController';
import { GetAllEmployee } from '../services/FetchFilipayServerServices';
import { IsAuthMiddleware } from "../middlewares/IsAuthMiddleware";
import { CheckTokenMiddleware } from '../middlewares/CheckTokenMiddleware';

const EmployeeRouter = Router();

// get and also sync to our server
EmployeeRouter.get('/sync/employee', CheckTokenMiddleware, GetAllEmployeesController);

EmployeeRouter.post('/filipay/employee' ,CheckTokenMiddleware,AddNewEmployeeFilipayServerController)

EmployeeRouter.get('/filipay/employee', CheckTokenMiddleware,GetAllEmployeesFilipayServerController);

EmployeeRouter.put('/filipay/employee',CheckTokenMiddleware, UpdateEmployeeFilipayServerController)

export default EmployeeRouter;