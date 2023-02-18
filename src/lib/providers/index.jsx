import { AuthProvider } from './AuthProvider';
import { ListProvider } from './ListProvider';
import { ProductProvider } from './ProductProvider';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<ListProvider>
				<ProductProvider>{children}</ProductProvider>
			</ListProvider>
		</AuthProvider>
	);
}

export { AppProviders };
