import { createRoot } from 'react-dom/client';

import App from './App';
import { AppProviders } from './lib/providers';
import './styles/index.css';
import './lib/utils/i18n';

createRoot(document.getElementById('root')).render(
	<AppProviders>
		<App />
	</AppProviders>
);
