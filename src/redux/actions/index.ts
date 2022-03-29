import { RepositoriesStatus } from '../action_types';

interface SUCCESS {
	type: RepositoriesStatus.SUCCESS;
	payload: RepositoryData[];
}
interface LOADING {
	type: RepositoriesStatus.LOADING;
}
interface ERROR {
	type: RepositoriesStatus.ERROR;
	payload: string;
}
interface RepositoryData {
	name: string;
	description: string;
	links: { npm: string; homepage: string };
	publisher: { username: string; email: string };
}
export interface RepositoriesProps {
	data: RepositoryData[];
	loading: boolean;
	error: string | null;
}
export type Action = SUCCESS | LOADING | ERROR;

// interface actionProps {
// 	type: RepositoriesStatus;
// 	payload: RepositoriesProps['data'];
// }
