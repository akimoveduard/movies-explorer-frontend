import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { MoviesProvider } from './contexts/MoviesContext';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<MoviesProvider>
					<App />
				</MoviesProvider>
			</UserProvider>	
		</BrowserRouter>
	</React.StrictMode>,
);
