import { useState } from 'react';

import { useAuth } from '../providers/AuthProvider';

const authOptions = [
	{ code: 'lists_two', to: '/list' },
	{ code: 'products_two', to: '/products' },
	{ code: 'unit_two', to: '/units' }
];

const unauthOptions = [
	{ code: 'login', to: '/login' },
	{ code: 'register', to: '/register' }
];

export const useMenu = () => {
	const { user, setOpenConfirmLogout } = useAuth();
	const [open, setOpen] = useState(false);

	const authActions = [
		{
			code: 'logout',
			onClick: () => setOpenConfirmLogout(true)
		}
	];

	const menuOptions = user ? [...authOptions, ...authActions] : unauthOptions;

	const openMenu = () => setOpen(true);
	const closeMenu = () => setOpen(false);

	return {
		open,
		menuOptions,
		openMenu,
		closeMenu
	};
};
