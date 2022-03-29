import React, { useState } from 'react';
import { ListInc } from './List';
interface GetItemProps {
	list: ListInc[];
}
const GetItem: React.FC<GetItemProps> = ({ list }) => {
	const [result, setResult] = useState<typeof list>([]);
	const getResult = (event: React.ChangeEvent<HTMLInputElement>) => {
		const search = event.target.value.trim();
		let findArray: ListInc[] = [];
		if (!search.length) {
			setResult([]);
			return;
		}
		list.forEach((l) => {
			if (l.name.toLowerCase().search(search.toLowerCase()) >= 0) {
				findArray.push(l);
			}
		});
		setResult(findArray);
	};
	return (
		<div>
			<h1> Search Name</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<input type='search' onChange={getResult} />
			</form>
			<ul>
				{result.map((rs) => (
					<li key={rs.name + rs.created}>
						<strong style={{ fontSize: '20px', marginInline: '5px' }}>{rs.name}</strong>{' '}
						<em>{rs.created}</em>{' '}
					</li>
				))}
			</ul>
		</div>
	);
};

export default GetItem;
