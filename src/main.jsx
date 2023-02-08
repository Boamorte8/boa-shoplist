import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { AppProviders } from './lib/providers';
import { RouterRoot } from './RouterRoot';
import './styles/index.css';
import './lib/utils/i18n';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProviders>
			<RouterRoot />
		</AppProviders>
	</StrictMode>
);
