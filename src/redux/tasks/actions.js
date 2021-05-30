import { createAction } from '@reduxjs/toolkit';

export const fetchTasksRequest = createAction('tasks/fetchTasksRequest');
export const fetchTasksSuccess = createAction('tasks/fetchTasksSuccess');
export const fetchTasksError = createAction('tasks/fetchTasksError');

export const addTaskToDaysRequest = createAction('tasks/addTaskToDaysRequest');
export const addTaskToDaysSuccess = createAction('tasks/addTaskToDaysSuccess')
export const addTaskToDaysError = createAction('tasks/addTaskToDaysError')

export default {
    fetchTasksRequest,
    fetchTasksSuccess,
    fetchTasksError,
    addTaskToDaysRequest,
    addTaskToDaysSuccess,
    addTaskToDaysError
}
