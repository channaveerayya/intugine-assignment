import React from "react";
import styles from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/Brands">Brands </NavigationItem>
      <NavigationItem link="/Transporters">Transporters</NavigationItem>
      <NavigationItem link="/logout">Logout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
