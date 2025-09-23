import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BasicTestsPage from "./page";
import userEvent from "@testing-library/user-event";

describe("Basic Tests", () => {
	it("it can receive a new user and show it on a list", async () => {
		render(<BasicTestsPage />);

		const nameInput = screen.getByLabelText("Name:");
		const emailInput = screen.getByLabelText("Email:");

		const user = userEvent.setup({ delay: 50 }); //optional delay to see the typing

		await user.type(nameInput, "John Doe");
		await user.type(emailInput, "john@gmail.com");

		const button = screen.getByRole("button", { name: /submit/i });
		await user.click(button);

		//screen.debug(); //uncomment to see the current state of the DOM

		const name = screen.getByText(/John Doe/i);
		const email = screen.getByText(/john@gmail.com/i);

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	});
});
