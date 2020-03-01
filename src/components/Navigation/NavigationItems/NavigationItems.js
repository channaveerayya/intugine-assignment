import React, { Component, Fragment } from 'react'
import styles from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import profile from '../../assets/profile.svg'
import { connect } from 'react-redux';


class NavigationItems extends Component {
  render() {
    return (
      <ul className={styles.NavigationItems}>
        {this.props.deliveriesData.length ?
          <Fragment>
          <NavigationItem link="/" exact>Home</NavigationItem>
          <NavigationItem link="/Brands">Brands </NavigationItem>
          <NavigationItem link="/Transporters">Transporters</NavigationItem>
          <NavigationItem link="/profile"><div className={styles.profile}><img src={profile} alt="" /></div></NavigationItem>
          <NavigationItem link="/dropdown"><div className={styles.downArrow}>&or;</div></NavigationItem>
          </Fragment>
          : null
       }
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    deliveriesData: state.deliveries.deliveriesData,
  }
}

export default connect(mapStateToProps)(NavigationItems);
