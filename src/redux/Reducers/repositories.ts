import { Action, RepositoriesProps } from '../actions';
import { RepositoriesStatus } from '../action_types';

const reducer = (
	state: RepositoriesProps = { data: [], loading: false, error: null },
	action: Action
): RepositoriesProps => {
	switch (action.type) {
		case RepositoriesStatus.LOADING:
			return { data: [], loading: true, error: null };
		case RepositoriesStatus.ERROR:
			return { data: [], loading: false, error: action.payload };
		case RepositoriesStatus.SUCCESS:
			return { data: action.payload, loading: false, error: null };
		default:
			return state;
	}
};

export default reducer;
