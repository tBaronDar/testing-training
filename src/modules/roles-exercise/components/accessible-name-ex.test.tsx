import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import AccessibleNameExercise from "./accessible-name-ex";

describe("Accesible Name Exercise", () => {
	it("finds buttons by their accessible names", () => {
		render(<AccessibleNameExercise />);
		//use regEx not strings to avoid case sensitivity
		const submitButton = screen.getByRole("button", { name: /submit/i });
		const cancelButton = screen.getByRole("button", { name: /cancel/i });
		expect(submitButton).toBeInTheDocument();
		expect(cancelButton).toBeInTheDocument();
	});

	it("finds the text input by its associated label's accessible name", () => {
		render(<AccessibleNameExercise />);

		const nameInput = screen.getByRole("textbox", { name: /name/i });
		expect(nameInput).toBeInTheDocument();

		const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });
		expect(checkbox).toBeInTheDocument();
	});

	it("finds buttons by their aria-label values", () => {
		render(<AccessibleNameExercise />);
		const closeButton = screen.getByRole("button", { name: /close/i });
		const saveButton = screen.getByRole("button", { name: /save/i });
		expect(closeButton).toBeInTheDocument();
		expect(saveButton).toBeInTheDocument();
	});
});
