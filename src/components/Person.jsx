function Person({ name, age, image }) {
	return (
		<article className="birthdays-list-item">
			<div className="birthdays-item-data">
				<h2 className="birthdays-data-header">{name}</h2>
				<p className="birthdays-data-years">{age} years</p>
			</div>
			<img className="birthdays-item-img" src={image} alt={`Image of ${name}`}></img>
		</article>
	);
}

export default Person;
