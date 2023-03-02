/* Components Types */

import { ReactNode } from 'react';

export type ProvidersProps = {
	children: ReactNode;
};

export type AuthRoutesProps = {
	isAuthenticated: boolean;
	children: ReactNode;
};

export type HeaderLinkProps = {
	code: string;
	to: string;
	onClick: () => void;
};

export type MessageProps = {
	image: string;
	children: ReactNode;
};
