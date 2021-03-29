import apiClient from 'ra-laravel-client';

const customSettings = {
  withCredentials: true
};

const dataProvider = apiClient('http://localhost:8150/api', customSettings);

export default dataProvider;