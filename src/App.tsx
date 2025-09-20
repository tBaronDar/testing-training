import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

export type User = {
	id?: number;
	name: string;
	email: string;
};

function App() {
	const [users, setUsers] = useState<Array<User>>([]);

	const onUserAdd = (user: User) => {
		setUsers([...users, { ...user, id: users.length + 1 }]);
	};
	return (
		<div>
			<UserForm onUserAdd={onUserAdd} />;
			<hr />
			<UserList users={users} />
		</div>
	);
}

export default App;
