import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
import { describe, it, expect } from "vitest";
import type { User } from "../types";

describe("UserList component", () => {
	//to avoid code repetion in the tests
	//we create a helper function that renders the component with some users
	//DONT use render in the beforeEach()

	function renderListWithUsers() {
		const users: Array<User> = [
			{ id: 1, name: "John Doe", email: "john@gmail.com" },
			{ id: 2, name: "Jane Doe", email: "jane@gmail.com" },
		];
		render(<UserList users={users} />);
		return { users };
	}

	//basic test to check if the component renders the header
	it("renders row per user", () => {
		renderListWithUsers();

		//the line below adds a link to the testing playground
		//follow the link to see how to select elements in the component
		//props can be added on the fly to test different states of the component
		screen.logTestingPlaygroundURL();

		const heading = screen.getByRole("heading", { name: /user list/i });
		expect(heading).toBeInTheDocument();
	});

	//the first 2 tests do the same thing in different ways
	//the try to count the number of users rendered
	//the last one is the recommended way(says AI)
	//it looks for the text that the user sees

	//1) using container
	//this is the worst way because it tests implementation details
	//and it is brittle to changes in the component structure
	//for example if we change the div to a section or a li it will break
	//it also does not test what the user sees
	//so it is not a good representation of the component's functionality
	//it is better to use screen and queries that simulate user interactions
	//like getByText, getByRole, getByLabelText, etc.
	it("renders the email and name of each user", () => {
		const users: Array<User> = [
			{ id: 1, name: "John Doe", email: "john@gmail.com" },
			{ id: 2, name: "Jane Doe", email: "jane@gmail.com" },
		];
		const { container } = render(<UserList users={users} />);

		const list = container.querySelector("ul");
		expect(list?.children).toHaveLength(users.length);
	});

	//2 using data-testid
	//this is better than the previous one because it tests more things
	//but it is still not the best way
	//testid should be used as a last resort when there is no other way to select an element
	//for example when the element has no text or role
	//or when the text or role is dynamic and can change
	//or when the element is deeply nested and hard to select otherwise
	//or when the element is not visible to the user but still needs to be tested
	//for example when testing accessibility features like aria attributes
	it("renders the email and name of each user - better", () => {
		const { users } = renderListWithUsers();

		const usersList = screen.getByTestId("users");
		const rows = within(usersList).getAllByTestId(/user-/i);
		//or we can use expect(usersList.children).toHaveLength(users.length);

		expect(rows).toHaveLength(users.length);
	});

	//3 using getByText
	//this is the recommended way because it tests what the user sees
	//and it is more resilient to changes in the component structure.

	//for example if we change the div to a section or a li it will still work
	//as long as the text content remains the same
	//it also encourages better accessibility practices by using semantic HTML elements
	//and by making sure that the text content is unique and descriptive enough to be selected
	//if there are multiple elements with the same text content it will throw an error
	//so make sure that the text content is unique or use a more specific selector
	//for example if there are multiple users with the same name you can use the email instead
	//or you can use a combination of both name and email to make it unique
	//you can also use regular expressions to match partial text or case insensitive text
	//for example /john/i will match John, john, JOHN
	it("renders the email and name of each user - recommended", () => {
		const { users } = renderListWithUsers();

		users.forEach((user) => {
			const name = screen.getByText(user.name);
			const email = screen.getByText(user.email);
			expect(name).toBeInTheDocument();
			expect(email).toBeInTheDocument();
		});
	});
});
