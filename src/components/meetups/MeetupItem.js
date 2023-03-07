import styles from './MeetupItem.module.css';
import Card from '../ui/Card';

const MeetupItem = (props) => {
  return (
    <li className={styles.item}>
      <Card>
      <div className={styles.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div>
          <button className={styles.actions}>To Favorites</button>
        </div>
      </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
