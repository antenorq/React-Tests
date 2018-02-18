import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Componente02 from './Componente02';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render
	(
		<div>
			<App />
			<Componente02/>
		</div>,
		document.getElementById('root')
	);
registerServiceWorker();
