import Wrapper from './ListAndSearchList/Wrapper';
import './App.scss';
import RepositoriesList from './RepositoriesList';
import { Provider } from 'react-redux';
import { store } from './redux';
function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Wrapper />
				<hr />
				<RepositoriesList />
			</div>
		</Provider>
	);
}

export default App;
