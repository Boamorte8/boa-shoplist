import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { AppProviders } from '@lib/providers';
import './styles/index.css';
import '@lib/utils/i18n';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<AppProviders />
	</StrictMode>
);
