import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import NotFound from './pages/notFound/NotFound';


function App() {
	return (
		<Router>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/hotels' element={<List />} />
				<Route path='/hotels/:id' element={<Hotel />} />

				<Route path='*' element={<NotFound />} />
			</Routes>

		</Router>
	);
}

export default App;
