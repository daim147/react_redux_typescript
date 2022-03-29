import axios from 'axios';
import { Dispatch } from 'react';
import { Action } from '../actions';
import { RepositoriesStatus } from '../action_types';

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
	dispatch({
		type: RepositoriesStatus.LOADING,
	});

	try {
		const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
			params: {
				text: term,
			},
		});
		const payload = data.objects.map((result: any) => result.package);
		dispatch({ type: RepositoriesStatus.SUCCESS, payload });
	} catch (err: any) {
		dispatch({
			type: RepositoriesStatus.ERROR,
			payload: err.message,
		});
	}
};
