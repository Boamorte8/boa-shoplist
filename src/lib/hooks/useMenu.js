import { useState } from 'react';

import { useAuth } from '../providers/AuthProvider';

const authOptions = [
	{ code: 'lists_two', url: '/list' },
	{ code: 'products_two', url: '/products' },
	{ code: 'unit_two', url: '/units' }
];

const unauthOptions = [
	{ code: 'login', url: '/login' },
	{ code: 'register', url: '/register' }
];

export const useMenu = () => {
	const { user, setOpenConfirmLogout } = useAuth();
	const [open, setOpen] = useState(false);

	const authActions = [
		{
			code: 'logout',
			url: '',
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
