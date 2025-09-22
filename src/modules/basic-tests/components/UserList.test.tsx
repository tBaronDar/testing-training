import { render, screen } from "@testing-library/react";
import UserList from "./UserList";
import { describe, it, expect } from "vitest";

describe("UserList component", () => {
	const users = [
		{ id: 1, name: "John Doe", email: "john@gmail.com" },
		{ id: 2, name: "Jane Doe", email: "jane@gmail.com" },
	];
	it("renders row per user", () => {
		render(<UserList users={users} />);

		const heading = screen.getByRole("heading", { name: /user list/i });
		expect(heading).toBeInTheDocument();
	});

	it("renders the email and name of each user", () => {
		render(<UserList users={users} />);
	});
});
