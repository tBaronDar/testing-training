import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RolesExercise from "./roles-exercise";

describe("RolesExercise", () => {
	it("checks the component for a list of roles", () => {
		render(<RolesExercise />);
		const roles = [
			"button",
			"link",
			"banner",
			"contentinfo",
			"heading",
			"img",
			"checkbox",
			"spinbutton",
			"radio",
			"textbox",
			"list",
			"listitem",
		];
		//not really needed but just to show the use of within
		const exercise = screen.getByTestId("roles-exercise");

		expect(exercise).toBeInTheDocument();

		roles.forEach((role) => {
			const el = within(exercise).getByRole(role);
			expect(el).toBeInTheDocument();
		});
	});
});
