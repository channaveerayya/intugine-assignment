import React, { Component,Fragment } from "react";
import styles from "./layout.module.scss";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { connect } from "react-redux";
class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };
    drawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <Fragment>
                <Toolbar
                    isAuth={true}
                    drawerToggleClicked={this.drawerToggleHandler}
                />
                <SideDrawer
                    isAuth={true}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>{this.props.children}</main>
            </Fragment>
        );
    }
}
// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     }
// };

export default Layout;
