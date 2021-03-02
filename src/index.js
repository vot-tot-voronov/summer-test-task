import React from 'react'
import ReactDOM from 'react-dom'
import {DataProvider} from './components/data-context/DataContext'
import {App} from './components/app/App'
import 'semantic-ui-css/semantic.min.css'
import './index.css';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
);
