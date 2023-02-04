import { useState } from 'react';

import { useAuth } from '../providers/AuthProvider';

const authOptions = [{ code: 'lists', url: '/list' }];

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
