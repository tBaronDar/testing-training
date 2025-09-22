import { createBrowserRouter, Navigate } from "react-router-dom";
import BasicTestsPage from "../modules/basic-tests/page";
import MainLayout from "../shared/main-layout";

export default function createRouter() {
	return createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <Navigate to="/basic-tests" replace />,
				},
				{
					path: "basic-tests",
					element: <BasicTestsPage />,
				},
			],
		},
		{
			path: "*",
			element: <div>Page Not Found</div>,
		},
	]);
}
