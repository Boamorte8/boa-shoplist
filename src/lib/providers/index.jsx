import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './AuthProvider';
import { ListProvider } from './ListProvider';

function AppProviders({ children }) {
	return (
		<Router>
			<AuthProvider>
				<ListProvider>{children}</ListProvider>
			</AuthProvider>
		</Router>
	);
}

export { AppProviders };
