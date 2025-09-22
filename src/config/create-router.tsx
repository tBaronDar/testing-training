import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../shared/main-layout";
import BasicTestsPage from "../modules/basic-tests/page";
import MoreTestsPage from "../modules/more-tests/page";

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
				{ path: "more-tests", element: <MoreTestsPage /> },
			],
		},
		{
			path: "*",
			element: <div>Page Not Found</div>,
		},
	]);
}
