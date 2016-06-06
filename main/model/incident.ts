import {Employee, Area} from '../employee';

export interface Incident{
  sio: string;
  type: string;
  severity: string;
  probability: string;
  percentageCompleted: number;
}


export class IncidentDetail implements Incident{
  sio: string;
  type: string;
  severity: string;
  probability: string;
  percentageCompleted: number;
  
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


    
    