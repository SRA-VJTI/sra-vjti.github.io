import { notifData } from "../../data/SiteData";
import styles from "./HomeNotifs.module.scss";

const HomeNotifs = () => {
	return (
		<>
			<div className={styles.notifs} id="notifs">
				<h1>Notifications</h1>
				<div className={styles.notifsMain}>
					{notifData.map((notif, _) => {
						return <div className={styles.notif}>{notif}</div>;
					})}
				</div>
			</div>
		</>
	);
};

export default HomeNotifs;
