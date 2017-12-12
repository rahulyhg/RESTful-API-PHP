import Vue from 'vue';
import accountService from './../account';
import store from './../../store';

/**
 * When the request succeeds
 */
const success = (token, resolve) => {
    store.dispatch('login', token);
    Vue.router.push({
        name: 'clients',
    });
};

/**
 * When the request fails
 */
const failed = (error, reject) => {
  if (error.response.data.error.length === 0) {
    return reject({ error: ['Invalid credentials'] });
  }
  return reject(error.response.data);
};

export default user => (
  new Promise((resolve, reject) => {
      Vue.$http.post('/auth/login', user)
             .then((response) => {
               success(response.data._links.items.user.token, resolve);
             })
             .catch((error) => {
                 failed(error, reject);
             });
  })
);
