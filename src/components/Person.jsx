function Person({ name, age, image }) {
	return (
		<article>
			<h2>{name}</h2>
			<p>{age} years</p>
			<img src={image} alt={`Image of ${name}`}></img>
		</article>
	);
}

export default Person;
