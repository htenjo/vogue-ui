import { Injectable } from '@angular/core';
import {Employee, Area} from '../model/Employee';
 

@Injectable()
export class EmployeeService {
    findEmployeesByName(name : string) : Employee[]{
        return;
    }
    
    findAreaByName(name : string) : Area[]{
        return;
    }
}