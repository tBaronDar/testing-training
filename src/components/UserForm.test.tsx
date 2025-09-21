import { render, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import "@testing-library/jest-dom";

//a basic test
test("it shows two inputs and a button", () => {
	//render component
	render(<UserForm onUserAdd={() => {}} />);

	//manipulate the component or fing an element in it
	const inputs = screen.getAllByRole("textbox");
	const button = screen.getByRole("button");

	//assertion
	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});
