import React, { Component, Fragment } from "react";
import Modal from '../../components/UI/Modal/Modal'
import DashboardComponent from '../../components/dashboard/Dashboard'
import axios from '../../axios-interceptor'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as ACTIONS from "../../store/actions/index";
import { connect } from "react-redux";
import Loading from '../../components/Spinner/Spinner'

class Dashboard extends Component {
    state = {
        loading: true
    };
    componentDidMount() {
        this.setState({loading: this.props.deliveriesData ? false : true})
        this.props.deliveries(this.props.name, this.props.email)
    }

    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.loading}
                >
                    <h1>hello</h1>
                </Modal>
                {this.props.deliveriesData.length ? <DashboardComponent deliveriesData={this.props.deliveriesData} /> : <Loading />}
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        deliveriesData: state.deliveries.deliveriesData,
        name: state.login.name,
        email: state.login.email
    }
}



const mapDispatchToProps = dispatch => {
    return {
        deliveries: (name, email) => dispatch(ACTIONS.deliveries(name, email))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Dashboard, axios));
