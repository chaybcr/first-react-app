import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

var rootElement = document.getElementById('root');

ReactDOM.render(<App appConfig={rootElement.getAttribute('data-app-config')} />, rootElement);
