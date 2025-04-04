import { FC, useState } from "react";
//interfaces
import { User } from "../../../core/interfaces/user";
//styles
import styles from './ListItem.module.scss';

interface Props {
    user: User;
}

const ListItem: FC<Props> = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(prev => !prev);
    };

    return (
        <li>
            <div className={styles.wrapper}>
                {user.name}
                <button onClick={toggleInfo}>
                    {showInfo ? 'Hide details' : 'Show details'}
                </button>
            </div>
            {showInfo && (
                <div className={styles.info}>
                    <p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                </div>
            )}
        </li>

    );
};

export default ListItem;