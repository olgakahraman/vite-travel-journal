import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

import data from './data';

function App() {
	const [search, setSearch] = useState('');

	const cards = data
		.filter((item) => {
			return search.toLowerCase() === ''
				? item
				: item.title.toLowerCase().includes(search);
		})
		.map((item) => {
			return <Card key={item.id} {...item} />;
		});

	return (
		<div className="container">
			<Navbar />
			<input
				type="text"
				id="searchInput"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<section className="cards-list">{cards}</section>
		</div>
	);
}

export default App;
