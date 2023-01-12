import { useState } from 'react';

import { useAuth } from '../providers/auth-provider';

const authOptions = [
	{ code: 'lists', url: '/lists' },
	{ code: 'list', url: '/list' }
];

const unauthOptions = [
	{ code: 'login', url: '/login' },
	{ code: 'register', url: '/register' }
];

export const useMenu = () => {
	const { user } = useAuth();
	const [open, setOpen] = useState(false);

	const menuOptions = user ? authOptions : unauthOptions;

	const openMenu = () => setOpen(true);
	const closeMenu = () => setOpen(false);

	return {
		open,
		menuOptions,
		openMenu,
		closeMenu
	};
};
