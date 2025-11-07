import { NotificationData } from '../../data';
import styles from './HomeNotifs.module.scss';

const HomeNotifications = () => {
  return (
    <>
      <div className={styles.notifs} id='notifs'>
        <h1>Notifications</h1>
        <div className={styles.notifsMain}>
          {NotificationData.map((notif, idx) => {
            return (
              <div className={styles.notif} key={`notification_${idx}`}>
                {notif}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeNotifications;
