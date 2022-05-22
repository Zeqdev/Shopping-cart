import { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import styles from './ShoppingCart.module.css';

export function ShoppingCart({ cart, setCart }) {
	const [total, setTotal] = useState([]);

	useEffect(() => {
		const getTotal = () => {
			let prices = [];

			if (cart.length !== 0) {
				cart.map(item => {
					return prices.push(item.price * item.quantity);
				});
			}

			let result = prices.reduce((acc, current) => acc + current, 0);
			setTotal(result);
		};

		getTotal();
	}, [cart]);

	const removeItem = id => {
		const removeItem = cart.filter(item => item.id !== id);
		setCart(removeItem);
	};

	const emptyCart = () => {
		setCart([]);
	};

	const moreProduct = product => {
		setCart(
			cart.map(item => {
				if (item.id === product.id) {
					return {
						...item,
						quantity: item.quantity + 1,
					};
				}
				return item;
			})
		);
	};

	const lessProduct = product => {
		setCart(
			cart.map(item => {
				if (item.id === product.id) {
					return {
						...item,
						quantity: item.quantity - 1,
					};
				}
				return item;
			})
		);
	};

	return (
		<section>
			<div className={styles.container}>
				{cart.map((item, index) => {
					return (
						<div key={index} className={styles.card}>
							<img src={item.img} alt={item.name} width={180} height={120} />
							<div className={styles.productInfo}>
								<strong className={styles.name}>{item.name}</strong>
								<strong className={styles.price}>${item.price * item.quantity}</strong>
							</div>
							<div className={styles.productQuantity}>
								<span className={styles.quantity}>{item.quantity}</span>
								{item.quantity > 1 ? (
									<div>
										<AiOutlinePlusCircle
											color='white'
											size={25}
											className={styles.moreItem}
											onClick={() => moreProduct(item)}
										/>
										<AiOutlineMinusCircle
											color='white'
											size={25}
											className={styles.lessItem}
											onClick={() => lessProduct(item)}
										/>
									</div>
								) : (
									<div>
										<AiOutlinePlusCircle
											color='white'
											size={25}
											className={styles.moreItem}
											onClick={() => moreProduct(item)}
										/>
										<MdDelete
											color='white'
											size={25}
											className={styles.removeItem}
											onClick={() => {
												removeItem(item.id);
											}}
										/>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
			<div>
				{cart.length === 0 ? (
					<span className={styles.cartIsEmpty}>Your cart is empty.</span>
				) : (
					<div className={styles.cartIsFull}>
						<div className={styles.total}>
							<span>Total: $</span>
							<span>{total}</span>
						</div>
						<div>
							<button className={styles.emptyCart} onClick={() => emptyCart()}>
								Empty cart
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
