import {Employee, Area} from './employee';

export class Event{
    id: number;
    sio: string;
    eventType: string;
    createdDate: string;
    description: string;
    area: Area;
    supervisor: Employee;
}