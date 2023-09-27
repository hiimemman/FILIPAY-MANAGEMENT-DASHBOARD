import { Router } from 'express';
import { AddNewEmployeeFilipayServerController, GetAllEmployeesController, GetAllEmployeesFilipayServerController, UpdateEmployeeFilipayServerController } from '../controllers/EmployeeController';
import { GetAllEmployee } from '../services/FetchFilipayServerServices';


const EmployeeRouter = Router();

// get and also sync to our server
EmployeeRouter.get('/sync/employee', GetAllEmployeesController);

EmployeeRouter.post('/filipay/employee' ,AddNewEmployeeFilipayServerController)

EmployeeRouter.get('/filipay/employee', GetAllEmployeesFilipayServerController);

EmployeeRouter.put('/filipay/employee',UpdateEmployeeFilipayServerController)

export default EmployeeRouter;