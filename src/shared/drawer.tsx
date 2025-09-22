import styles from "./drawer.module.css";

export default function Drawer() {
	return (
		<div className={styles["drawer-container"]}>
			<p>Contents</p>
			<a href="/basic-tests">First exercise</a>
			<a href="/more-tests">Second exercise</a>
		</div>
	);
}
