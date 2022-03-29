import { combineReducers } from 'redux';
import RepositoriesReducer from './repositories';
const combineReducer = {
	repositories: RepositoriesReducer,
};
export const reducers = combineReducers(combineReducer);
export type reducersTypes = ReturnType<typeof reducers>;
