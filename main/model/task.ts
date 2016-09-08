/**
 * Created by htenjo on 9/7/16.
 */
import {Employee, Area} from './employee';
import {Event} from './event';

export class Task{
    description : string;
    createdDate : string;
    percentageCompleted : number;
    expectedClosedDate : string;
    closedComments : string;
    responsible : Employee;
    event : Event;

    /**
    private _shortDescription : string;

    get shortDescription() : string {
        return "desd";
    }

    set shortDescription(desc : string) {
        this._shortDescription = desc;
    }
     */
}