import {Employee, Area} from '../employee';

export class Incident{
  sio: string;
  creationDate: string;
  type: string;
  criticity: string;
  severity: string;
  probability: string;
  completed: number;
  
  
  collaborator: Employee;
  area: Area;
  createdDate: string;
  description: string;
  takenMeasures: string;
  additionalMeasures: string;
  responsible: Employee;
  clazz: string;
  closedDate: string;
  closedComment: string;
  supervisor: Employee;
}


    
    