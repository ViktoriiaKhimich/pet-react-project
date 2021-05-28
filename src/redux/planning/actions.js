import { createAction } from '@reduxjs/toolkit'

export const fetchTasksToPlanRequest = createAction('plans/fetchTasksToPlanRequest');
export const fetchTasksToPlanSuccess = createAction('plans/fetchTasksToPlanSuccess');
export const fetchTasksToPlanError = createAction('plans/fetchTasksToPlanError');

export default {
    fetchTasksToPlanRequest,
    fetchTasksToPlanSuccess,
    fetchTasksToPlanError,
}