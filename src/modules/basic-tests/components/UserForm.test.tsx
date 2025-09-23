import { render, screen } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event"; //simulates user events, it is legacy but still useful
import UserForm from "./UserForm";
import { describe, it, expect, vi } from "vitest";

//a basic test
describe("test the form", () => {
	//render component
	it("renders the form", () => {
		render(<UserForm onUserAdd={() => {}} />);
		//manipulate the component or find an element in it
		const inputs = screen.getAllByRole("textbox");
		const button = screen.getByRole("button");

		//assertion
		expect(inputs).toHaveLength(2);
		expect(button).toBeInTheDocument();
	});

	it("calls onUserAdd when the form is submitted", async () => {
		const mockOnUserAdd = vi.fn();
		render(<UserForm onUserAdd={mockOnUserAdd} />);

		const nameInput = screen.getByLabelText(/name/i);
		const emailInput = screen.getByLabelText(/email/i);
		// //alternative way to get the email input
		// const emailInput = screen.getByRole("textbox", { name: /email/i });

		//simulate user events
		//type() is a combination of click() and keyboard()
		await user.click(nameInput);
		await user.keyboard("John Doe");

		await user.type(emailInput, "john@gmail.com"); //don;t forget to await

		//simulate form submission
		const button = screen.getByRole("button");
		await user.click(button);

		//assertion
		expect(mockOnUserAdd).toHaveBeenCalledTimes(1);
		expect(mockOnUserAdd).toHaveBeenCalledWith({
			name: "John Doe",
			email: "john@gmail.com",
		});
	});

	it("checks that the inputs are cleared after submission", async () => {
		render(<UserForm onUserAdd={() => {}} />);

		const nameInput = screen.getByLabelText(/name/i);
		const emailInput = screen.getByLabelText(/email/i);
		const button = screen.getByRole("button");

		const user = userEvent.setup();

		await user.type(nameInput, "John Doe");
		await user.type(emailInput, "test@gmail.com");
		await user.click(button);

		expect(nameInput).toHaveValue("");
		expect(emailInput).toHaveValue("");
	});
});
