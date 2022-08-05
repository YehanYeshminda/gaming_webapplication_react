import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Home/Main';
import SingleItem from './Components/Details/SingleItem';
import CatergoryItemList from './Components/Details/CatergoryItemList';
import CatergoriesHeader from './Components/Home/CatergoriesHeader';
import SearchBar from './Components/Details/SearchBar';
import CatergoriesItems from './Components/Details/CatergoriesItems';

function App() {
	return (
		<div>
			<Navbar />
			<div className="max-w-7xl mx-auto">
				<CatergoriesHeader />
				<SearchBar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/Game/:id" element={<SingleItem />} />
					<Route path="/Catergory/:name" element={<CatergoryItemList />} />
					<Route path="/searched/:searchName" element={<CatergoriesItems />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
