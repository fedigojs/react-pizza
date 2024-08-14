import React from 'react';
import { Pizza } from '../components/PizzaBlock';
import { Sceleton } from '../components/PizzaBlock/Sceleton';
import { Categories } from '../components/Categories';
import { SortL } from '../components/SortL';

export const Home = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://66b897923ce57325ac779756.mockapi.io/api/v1/item')
			.then((res) => res.json())
			.then((json) => {
				setItems(json);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<div className='content__top'>
				<Categories />
				<SortL />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<Sceleton key={index} />
					  ))
					: items.map((pizza) => (
							<Pizza
								key={pizza.id}
								title={pizza.title}
								price={pizza.price}
								size={pizza.sizes}
								id={pizza.id}
								imgn={pizza.imageUrl}
								type={pizza.types}
							/>
					  ))}
			</div>
		</>
	);
};
