import Person from "./Person.jsx";

function List({ items }) {
	return (
		<div>
			{items.map((item, index) => (
				<Person key={index} {...item} />
			))}
		</div>
	);
}

export default List;
