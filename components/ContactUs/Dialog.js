import React from 'react';
import ContactUs from './ContactUs';
import styles from "./Dialog.module.scss"
function Dialog(props) {
    return (
        <div className={styles.dialog}>{props.dog}</div>
    )
}

export default Dialog