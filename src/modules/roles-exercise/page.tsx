import AccessibleNameExercise from "./components/accessible-name-ex";
import RolesExercise from "./components/roles-exercise";
export default function RolesExercisePage() {
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
					To run the notebook with existing notes use the same file name, in
					this case rtl-notes.js. Below starts the code of the exercise check
					code to understand this nonsence.
				</p>
			</div>
			<RolesExercise />
			<AccessibleNameExercise />
		</div>
	);
}
