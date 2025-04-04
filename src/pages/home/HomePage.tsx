import { FC, useEffect, useState } from "react";
//api
import { getUsers } from "../../core/api/user";
//interfaces
import { User } from "../../core/interfaces/user";
//components
import ListItem from "./ListItem/ListItem";
//styles
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getUsers().then((data) => setUsers(data));
	}, []);

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				Header
			</header>
			<div className={styles.content_wrapper}>
				<main className={styles.main}>
					<h1>
						Users list:
					</h1>
					<ul>
						{users.map((user) => (
							<ListItem key={user.id} user={user} />
						))}
					</ul>
				</main>
				<aside className={styles.sidebar}>
					Sidebar
				</aside>
			</div>

			<footer className={styles.footer}>
				Footer
			</footer>
		</div>
	);
};

export default HomePage;