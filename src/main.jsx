import { createRoot } from 'react-dom/client';

import './index.css';

const app = (
	<div>
		<h1>Esteban Salazar</h1>
		<img src='/vite.svg' />
	</div>
);
const container = document.getElementById('root');

createRoot(container).render(app);
