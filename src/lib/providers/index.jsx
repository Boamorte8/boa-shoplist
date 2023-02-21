import { AuthProvider } from './AuthProvider';
import { ListProvider } from './ListProvider';
import { ProductProvider } from './ProductProvider';
import { UnitProvider } from './UnitProvider';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<ListProvider>
				<ProductProvider>
					<UnitProvider>{children}</UnitProvider>
				</ProductProvider>
			</ListProvider>
		</AuthProvider>
	);
}

export { AppProviders };
