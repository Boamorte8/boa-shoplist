import { AuthProvider } from './AuthProvider';
import { ListProductProvider } from './ListProductProvider';
import { ListProvider } from './ListProvider';
import { ProductProvider } from './ProductProvider';
import { RouterRoot } from 'RouterRoot';
import { UnitProvider } from './UnitProvider';

function AppProviders() {
	return (
		<AuthProvider>
			<ListProvider>
				<ProductProvider>
					<ListProductProvider>
						<UnitProvider>
							<RouterRoot />
						</UnitProvider>
					</ListProductProvider>
				</ProductProvider>
			</ListProvider>
		</AuthProvider>
	);
}

export { AppProviders };
