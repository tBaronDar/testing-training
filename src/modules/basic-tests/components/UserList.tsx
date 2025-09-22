import React from "react";
import type { User } from "../types";

import styles from "./UserList.module.css";

export type UserListProps = {
	users: Array<User>;
};

const UserItem: React.FC<{ user: User }> = ({ user }) => (
	<div
		className={styles["item-container"]}
		key={user.id}
		data-testid={`user-${user.id}`}>
		<p>{user.name}</p>
		<p>{user.email}</p>
	</div>
);

const UserList: React.FC<UserListProps> = (props: UserListProps) => {
	const { users = [] } = props;
	return (
		<div className={styles["list-container"]}>
			<h2>User List</h2>
			<div className={styles["list-header"]}>
				<p>Name</p>
				<p>Email</p>
			</div>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;
