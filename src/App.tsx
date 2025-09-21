import "./App.css";
import { RouterProvider } from "react-router-dom";
import createRouter from "./config/create-router";

function App() {
	return <RouterProvider router={createRouter()} />;
}

export default App;
