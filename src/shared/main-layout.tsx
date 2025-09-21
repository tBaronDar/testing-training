import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<div>
			<h1>Main Layout</h1>
			<hr />
			{/* This is where child routes will be rendered */}
			<Outlet />
		</div>
	);
}
