import { Outlet } from 'react-router-dom';

import { AlertBox } from './components/atoms/alerts/AlertBox';
import { AppFooter } from './components/molecules/AppFooter';
import { AppHeader } from './components/molecules/AppHeader';

export const App = () => {
	return (
		<>
			<AppHeader />
			<AlertBox />
			<Outlet />
			<AppFooter />
		</>
	);
};
