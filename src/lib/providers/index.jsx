import { AuthProvider } from './AuthProvider';
import { ListProductProvider } from './ListProductProvider';
import { ListProvider } from './ListProvider';
import { ProductProvider } from './ProductProvider';
import { UnitProvider } from './UnitProvider';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<ListProvider>
				<ProductProvider>
					<ListProductProvider>
						<UnitProvider>{children}</UnitProvider>
					</ListProductProvider>
				</ProductProvider>
			</ListProvider>
		</AuthProvider>
	);
}

export { AppProviders };
