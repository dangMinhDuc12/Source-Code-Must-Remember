import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Tạo store 

import {createStore} from 'redux';
import myReducer from './reducers/index.js';

//Dùng Provider để kết nối react với redux, bao bọc lấy thẻ cpn App tổng bên ngoài
import {Provider} from 'react-redux';

const store = createStore(myReducer);

ReactDOM.render(
  
    <Provider store = {store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);


reportWebVitals();
