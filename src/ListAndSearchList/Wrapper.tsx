import React, { useState } from 'react';
import List, { ListInc } from './List';
import GetItem from './GetItem';

const Wrapper = () => {
	const [list, setList] = useState<ListInc[]>([]);
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Simple React & Redux with Typescript</h1>
			<hr />
			<List getList={(list) => setList(list)} />
			<hr />
			<GetItem list={list} />
		</>
	);
};

export default Wrapper;
