import {Area, Employee} from "./employee";
/**
 * Created by htenjo on 9/24/16.
 */

/**
 *
 */
interface ReportEventsCreated{
    createdEvents : number;
}

interface ReportOpenTasks{
    openTasks : number;
}

/**
 *
 */
export interface ReportTasksClosedInLastYear extends ReportOpenTasks{
    totalTasks? : number;
    startDate: string;
    endDate: string;
}

/**
 *
 */
export interface ReportEventsCreatedByEventType extends ReportEventsCreated{
    eventType : string;
}

/**
 *
 */
export interface ReportOpenTasksByEventType extends ReportOpenTasks{
    type : string;
}

/**
 *
 */
export interface ReportEventsCreatedByArea extends ReportEventsCreated{
    area: Area;
}

export interface ReportTasksOpenByEmployee extends ReportOpenTasks{
    closedTasks: number;
    responsible : Employee;
}
