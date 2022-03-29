import React from 'react';
import { useAction } from './redux';
import { debounceFunction } from './utils';
import { useTypedSelector } from './redux';
const RepositoriesList: React.FC = () => {
	const { searchRepositories } = useAction();
	const { data, loading, error } = useTypedSelector((state) => state.repositories);
	console.log(data, loading, error);
	return (
		<div>
			<h1>Search Packages</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type='search'
					onChange={(e) =>
						debounceFunction(() => searchRepositories(e.target.value), 1000, 'repositories_fetch')
					}
				/>
				{loading && <h3>Loading...</h3>}
				{error && <h3>{error}</h3>}
				<div>
					{!!data.length &&
						data.map((dt) => (
							<details key={dt.links.npm}>
								<summary>{dt.name}</summary>
								<div>
									<div>
										Publisher: {dt.publisher.username}
										<a href={`mailto:${dt.publisher.email}`}>{dt.publisher.email}</a>
										<a href={`${dt.links.npm}`} target='_blank' rel='noreferrer'>
											Npm
										</a>
										<a href={`${dt.links.homepage}`} target='_blank' rel='noreferrer'>
											Homepage
										</a>
									</div>

									<em>{dt.description}</em>
								</div>
							</details>
						))}
				</div>
			</form>
		</div>
	);
};

export default RepositoriesList;
