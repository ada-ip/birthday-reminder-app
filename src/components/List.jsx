import Person from "./Person.jsx";

function List({ items }) {
	return (
		<div className="birthdays-list">
			{items.map((item, index) => (
				<Person key={index} {...item} />
			))}
		</div>
	);
}

export default List;
