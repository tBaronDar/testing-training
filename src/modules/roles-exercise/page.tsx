export default function RolesExercise() {
	return (
		<div>
			<div>
				<h2>Roles exercise</h2>
				<p>
					The course uses the package rtl-book to render components. I will do
					it here because i cannot use vitest in the notebook. Here are some
					note on the rtl-book, it seems useful in some occasions.
				</p>
				<p>To run the notebook:</p>
				<p>npx rtl-book serve rtl-notes.js</p>
				<p>
					Then open the browser at
					<a href="http://localhost:4005" target="_blank">
						{" "}
						http://localhost:4005
					</a>
				</p>
				<p>
					The rtl-book is a small framework that allows you to run React Testing
				</p>
				<p>
					To run the notebook with existing notes use the same file name, in
					this case rtl-notes.js. Below starts the code of the exercise.
				</p>
			</div>
			<div data-testid="roles-exercise">
				<a href="/#">Link</a>
				<button>Button</button>
				<header>Banner</header>
				<footer>ContentInfo</footer>
				<h1>Heading</h1>
				<img alt="description" /> Img
				<input type="checkbox" /> Checkbox
				<input type="number" /> Spinbutton
				<input type="radio" /> Radio
				<input type="text" /> Textbox
				<ul>Listgroup</ul>
				<li>Listitem</li>
			</div>
		</div>
	);
}
