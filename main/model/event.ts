import {Employee, Area} from './employee';

export interface Event{
  id: number;
  sio: string;
  eventType: string;
  createdDate: string;
  description: string;
  area: Area;
  supervisor?: Employee;
}