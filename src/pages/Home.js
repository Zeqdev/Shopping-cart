import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import burgers from '../components/burgers.json';
import styles from './Home.module.css';

export function Home({ cart, setCart }) {
	const addToCart = item => {
		return setCart([...cart, item]);
	};

	return (
		<section>
			<div className={styles.container}>
				{burgers.map(item => {
					return (
						<div key={item.id} className={styles.card}>
							<img width={300} height={200} src={item.img} alt={item.name} />
							<strong className={styles.name}>{item.name}</strong>
							<span className={styles.description}>{item.description}</span>
							<strong className={styles.price}>${item.price}</strong>
							<button className={styles.btn} onClick={() => addToCart(item)}>
								Add to cart
							</button>
						</div>
					);
				})}
			</div>
			<div className={styles.cart}>
				<Link to='/shoppingcart'>
					<RiShoppingCart2Fill size={20} />
				</Link>
			</div>
		</section>
	);
}
