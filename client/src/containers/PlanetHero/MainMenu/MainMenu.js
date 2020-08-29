import React from 'react';
import { useHistory} from 'react-router';
import styles from './MainMenu.module.css';

export function MainMenu() {
    const history = useHistory();

    function onMenuItemClick(direction) {
        history.push(`/planetHero/${direction}`);
        console.log(`/planetHero/${direction}`);
    }

    return (
        <div className={styles.menuContainer}>
            <div className={styles.logo}>Planet Hero</div>
            <ul className={styles.menuListContainer}>
                <li
                    className={styles.menuListItem}
                    onClick={() => onMenuItemClick('events')}
                >
                    Events
                </li>
                <li
                    className={styles.menuListItem}
                    onClick={() => onMenuItemClick('teams')}
                >
                    Teams
                </li>
                <li
                    className={styles.menuListItem}
                    onClick={() => onMenuItemClick('profile')}
                >
                    Profile
                </li>
            </ul>
        </div>
    );
}

