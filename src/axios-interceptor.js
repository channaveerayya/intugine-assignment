import axios from 'axios'

const instance = axios.create({
    baseURL: "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/"
});

export default instance;