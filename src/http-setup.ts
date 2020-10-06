import axios from 'axios';

export default axios.create({
    baseURL: '//join-tsh-api-staging.herokuapp.com',
    headers: { 'Content-type': 'application/json' }
});
