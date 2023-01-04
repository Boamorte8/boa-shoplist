import { BrowserRouter as Router } from 'react-router-dom';

function AppProviders({ children }) {
	return (
		<Router>
			{/* <AuthProvider>
        </AuthProvider> */}
			{children}
		</Router>
	);
}

export { AppProviders };
