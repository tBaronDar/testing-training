import React, { useState } from "react";
import type { User } from "../types";

interface UserFormProps {
	onUserAdd: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = (props: UserFormProps) => {
	const { onUserAdd } = props;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onUserAdd({ name, email });
		setName("");
		setEmail("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserForm;
