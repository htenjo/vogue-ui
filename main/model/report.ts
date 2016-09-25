/**
 * Created by htenjo on 9/24/16.
 */

export interface ReportTasksClosedInLastYear{
    openTasks: number;
    totalTasks? : number;
    startDate: string;
    endDate: string;
}

export interface ReportEventsCreatedByEventType{
    eventType : string;
    createdEvents : number;
}

export interface ReportOpenTasksByEventType{
    type : string;
    openTasks : number;
}