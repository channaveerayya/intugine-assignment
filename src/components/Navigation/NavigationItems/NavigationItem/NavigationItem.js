import React from 'react'
import styles from "./NavigationItem.module.scss";
import {NavLink} from 'react-router-dom'
const NavigationItem = props => {
    return (
      <li className={styles.NavigationItem}>
        <NavLink exact={props.exact} to={props.link} activeClassName={styles.active}>
          {props.children}
        </NavLink>
      </li>
    );
}

export default NavigationItem
