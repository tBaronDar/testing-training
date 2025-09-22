import React from "react";
import type { User } from "../types";

export type UserListProps = {
	users: Array<User>;
};

const UserList: React.FC<UserListProps> = (props: UserListProps) => {
	const { users = [] } = props;
	return (
		<div>
			<h2>User List</h2>
			{users.map((user) => (
				<div key={user.id} data-testid={`user-${user.id}`}>
					<p>Name: {user.name}</p>
					<p>Email: {user.email}</p>
				</div>
			))}
		</div>
	);
};

export default UserList;
