import { render, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import { describe, it, expect } from "vitest";

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
});
