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
				placeholder="Search"
				type="text"
				id="searchInput"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<section className="cards-list">{cards}</section>
			<footer>
				<small>
					This project was coded by Olga Dietiuk Kahraman -
					2024 and it is{' '}
					<a
						href="https://github.com/olgakahraman/vite-travel-journal"
						target="_blank"
						title="GitHub"
						rel="noopener noreferrer"
					>
						open-sourced on GitHub
					</a>
				</small>
			</footer>
		</div>
	);
}

export default App;
