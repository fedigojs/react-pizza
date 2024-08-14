import React from 'react';

export function Categories() {
	const [indexActive, setIndexActive] = React.useState(0);

	const categoriesArr = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const onClickActive = (index) => {
		setIndexActive(index);
	};

	return (
		<div className='categories'>
			<ul>
				{categoriesArr.map((value, index) => (
					<li
						key={index}
						onClick={() => onClickActive(index)}
						className={indexActive === index ? 'active' : ''}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}
