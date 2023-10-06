import { Router } from 'express';
import { AddNewEmployeeFilipayServerController, GetAllEmployeesController, GetAllEmployeesFilipayServerController, UpdateEmployeeFilipayServerController } from '../controllers/EmployeeController';
import { GetAllEmployee } from '../services/FetchFilipayServerServices';
import { IsAuthMiddleware } from "../middlewares/IsAuthMiddleware";
import { CheckTokenMiddleware } from '../middlewares/CheckTokenMiddleware';

const EmployeeRouter = Router();

// get and also sync to our server
EmployeeRouter.get('/sync/employee', CheckTokenMiddleware, GetAllEmployeesController);

EmployeeRouter.post('/employee' ,CheckTokenMiddleware,AddNewEmployeeFilipayServerController)

EmployeeRouter.get('/employee', CheckTokenMiddleware,GetAllEmployeesFilipayServerController);

EmployeeRouter.put('/employee',CheckTokenMiddleware, UpdateEmployeeFilipayServerController)

export default EmployeeRouter;