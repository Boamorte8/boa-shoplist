import { AuthProvider } from './AuthProvider';
import { ListProvider } from './ListProvider';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<ListProvider>{children}</ListProvider>
		</AuthProvider>
	);
}

export { AppProviders };
