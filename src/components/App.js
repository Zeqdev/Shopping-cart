import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Home } from '../pages/Home';
import styles from './App.module.css';

export function App() {
	const [cart, setCart] = useState([]);

	return (
		<BrowserRouter>
			<header>
				<Link to='/'>
					<div className={styles.brand}></div>
				</Link>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home cart={cart} setCart={setCart} />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
