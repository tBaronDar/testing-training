import { Outlet } from "react-router-dom";

import styles from "./main-layout.module.css";
import Drawer from "./drawer";

export default function MainLayout() {
	return (
		<div className={styles.container}>
			<Drawer />
			<hr />
			<Outlet />
		</div>
	);
}
