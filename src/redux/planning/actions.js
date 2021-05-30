import { createAction } from '@reduxjs/toolkit'

export const fetchTasksToPlanRequest = createAction('plans/fetchTasksToPlanRequest');
export const fetchTasksToPlanSuccess = createAction('plans/fetchTasksToPlanSuccess');
export const fetchTasksToPlanError = createAction('plans/fetchTasksToPlanError');

export const createNewTaskRequest = createAction('plans/createNewTaskRequest');
export const createNewTaskSuccess = createAction('plans/createNewTaskSuccess')
export const createNewTaskError = createAction('plans/createNewTaskError')

export default {
    fetchTasksToPlanRequest,
    fetchTasksToPlanSuccess,
    fetchTasksToPlanError,
    createNewTaskRequest,
    createNewTaskSuccess,
    createNewTaskError,
}