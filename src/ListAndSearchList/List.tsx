import React, { useEffect, useRef, useState } from 'react';
interface ListProps {
	getList: (list: ListInc[]) => void;
}
export interface ListInc {
	name: string;
	created: string;
}
const List: React.FC<ListProps> = ({ getList }) => {
	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		ref.current?.focus();
	}, []);
	const [item, setItem] = useState('');
	const [list, setList] = useState<ListInc[]>([]);
	useEffect(() => {
		getList(list);
	}, [list, getList]);
	return (
		<div>
			<h1>Name List</h1>
			<ul>
				{list.map((item) => (
					<li key={item.created + Math.random()}>{item.name}</li>
				))}
			</ul>
			<form onSubmit={(e) => e.preventDefault()}>
				<input ref={ref} value={item} onChange={(e) => setItem(e.target.value)} />
				<input
					type='submit'
					onClick={() =>
						item.trim().length &&
						(!setList((list) => [
							...list,
							{
								name: item.trim(),
								created: new Date().toLocaleString(navigator.languages[0], {
									dateStyle: 'full',
									timeStyle: 'short',
								}),
							},
						])! as boolean) &&
						(!setItem('')! as boolean)
					}
					value='Add to List'
				/>
			</form>
		</div>
	);
};

export default List;
