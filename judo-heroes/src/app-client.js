import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

//entry into react app -> mounts AppRoutes to dom on window load

window.onload = () => {
    ReactDOM.render(<AppRoutes />, document.getElementById('main'));
};