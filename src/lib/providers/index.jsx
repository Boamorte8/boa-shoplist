import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './auth-context';

function AppProviders({ children }) {
	return (
		<Router>
			<AuthProvider>{children}</AuthProvider>
		</Router>
	);
}

export { AppProviders };
