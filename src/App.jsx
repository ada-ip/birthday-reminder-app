import { useState } from "react";
import List from "./components/List.jsx";
import data from "./data";

function App() {
	const [people, setPeople] = useState(data);
	const numBirthdays = people.length;

	const deletePeople = () => {
		setPeople([]);
	};

	return (
		<main>
			<h1>{numBirthdays} Birthdays Today</h1>
			<List items={people} />
			<button type="button" onClick={deletePeople}>
				Clear All
			</button>
		</main>
	);
}

export default App;
