import React, { Component, Fragment } from 'react'
import styles from './dashboard.module.scss'
import destination from '../../components/assets/destination.svg';
import warehouse from '../../components/assets/warehouse.svg';
export default class Dashboard extends Component {
    state = {
        filterObject: {
            DEL: [],
            INT: [],
            OOD: [],
            UND: [],
            NFI: []
        },
        tableData: null,
        selected: null,
        scan: [],
        filterClick: 0,
        rowClick: 0,
        sort: true
    }
    componentDidMount() {
        const { deliveriesData } = this.props
        const deliveriesObj = {
            DEL: [],
            UND: [],
            INT: [],
            OOD: [],
            NFI: [],
        }
        if (deliveriesData.length) {
            deliveriesData.map(deliveries => {
                if (deliveriesObj[deliveries.current_status_code]) {
                    deliveriesObj[deliveries.current_status_code].push(deliveries)
                }
            })
        }
        this.setState({ filterObject: { ...deliveriesObj } }, () => {
            let filterArray = []
            let filterArrayKeys = []
            for (const keys in this.state.filterObject) {
                filterArray.push(this.state.filterObject[keys])
                filterArrayKeys.push(keys)
            }
            this.handleFilter(0, filterArray[0])
        })
    }
    handleFilter = (index, data) => {
        this.setState({ tableData: data, selected: index, filterClick: index }, () => {
            this.handleStatus(this.state.tableData[0].scan, 0)
        });
    }
    handleStatus = (scan, index) => {
        const data = scan.sort(function (a, b) {
            return new Date(b.time) - new Date(a.time);
        });
        this.setState({ scan: data })
    }
    handleSort = () => {
        const { sort } = this.state
        let sortedData = []
        if (sort) {
            sortedData = this.state.tableData.sort((a, b) => a.awbno - b.awbno)
        }
        else {
            sortedData = this.state.tableData.reverse()

        }
        this.setState({ sort: !this.state.sort, tableData: sortedData })
    }
    renderTable = () => {
        const { tableData } = this.state
        const formatDate = (fData) => {
            let date = new Date(fData);
            let dd = date.getDate();
            let mm = date.getMonth() + 1;
            let yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return dd + '/' + mm + '/' + yyyy;
        }
        return <div className={styles.tableParent}>
            <table>
                <thead><tr>
                    <th onClick={this.handleSort}>AWB NUMBER &nbsp;{this.state.sort ? <span>&#8743;</span> : <span>&or;</span>} </th>
                    <th>TRANSPORTER</th>
                    <th>SOURCE</th>
                    <th>DESTINATION</th>
                    <th>BRAND </th>
                    <th>START DATE</th>
                    <th>ETD </th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody>
                    {tableData.map((value, i) => {
                        const style = {
                            color: value.current_status === 'Delivered' ? '#74ac2e' : 'black'
                        }
                        return <tr key={i} onClick={() => this.handleStatus(value.scan, i)}>
                            <td>{value.awbno}</td>
                            <td> {value.carrier}</td>
                            <td>{value.from}</td>
                            <td>{value.to}</td>
                            <td>{value.carrier}</td>
                            <td>{formatDate(value.pickup_date)}</td>
                            <td>{formatDate(value.extra_fields.expected_delivery_date)}</td>
                            <td style={style}>{value.current_status}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
    render() {
        let filterArray = []
        let filterArrayKeys = []
        for (const keys in this.state.filterObject) {
            filterArray.push(this.state.filterObject[keys])
            filterArrayKeys.push(keys)
        }
        return (<Fragment>
            <div className={styles.filterPanel}>
                {filterArray.map((res, i) => {
                    const style = {
                        backgroundColor: this.state.filterClick == i ? "#2e5bff" : '#d5deff',
                        color: this.state.filterClick === i ? "#eef3f5" : '#2e5bff',
                    }
                    return <div key={i} className={styles.filter} style={style} onClick={() => this.handleFilter(i, res)}>
                        <div className={styles.text}> {filterArrayKeys[i]}</div>
                        <div className={styles.count}>{res.length}</div>
                    </div>

                })
                }

            </div>
            <div className={styles.displayTablesStatus}>
                <div className={styles.status}>
                    <div className={styles.timeLine}>
                        <div className={styles.logo}> <img src={destination} alt="" /></div>
                        <ul>
                            {this.state.scan.map((status, i) => {
                                let date = new Date(status.time);
                                let dd = date.getDate();
                                let mm = date.getMonth() + 1;
                                let yyyy = date.getFullYear();
                                if (dd < 10) {
                                    dd = '0' + dd;
                                }
                                if (mm < 10) {
                                    mm = '0' + mm;
                                }
                                let dateFormat = dd + '-' + mm + '-' + yyyy;

                                let minute = date.getUTCMinutes();
                                let hour = date.getUTCHours();
                                hour = hour + "." + minute;

                                return <li key={i}>
                                    <div className={styles.dot}></div>
                                    <div className={styles.dashedLines}></div>
                                    <div className={styles.statusLables}>
                                        <div>{status.location.substr(status.location.indexOf(" ") + 1)}</div>
                                        <div>{dateFormat}</div>
                                        <div>{hour}</div>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <div className={styles.logo}> <img src={warehouse} alt="" /></div>
                    </div>
                </div>
                {this.state.tableData && this.renderTable()}
            </div>
        </Fragment>
        )
    }
}
