export default function AccessibleNameExercise() {
	return (
		<div>
			<h3>Accessible Name Exercise</h3>
			<p>Accessible name is the name betwwen opening and closing tag</p>
			<div>
				<button>Submit</button>
				<button>Cancel</button>
			</div>
			<p>For elements that don't have a name but they have label</p>
			<div>
				<label htmlFor="name">Name</label>
				<input id="name" type="text" />
				<label>
					Accept terms
					<input type="checkbox" />
				</label>
			</div>
			<p>
				For elements that dont't have nor name nor label(svg icons etc...), we
				assign name by using aria-label.
			</p>
			<div>
				<button aria-label="close">X</button>
				<button aria-label="save">
					<svg />
				</button>
			</div>
		</div>
	);
}
