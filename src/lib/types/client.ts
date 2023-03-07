/* Components Types */

import { FC, ReactNode } from 'react';

export type ProvidersProps = {
	children: ReactNode;
};

export type AuthRoutesProps = {
	isAuthenticated: boolean;
	children: ReactNode;
};

export type MenuOption = {
	code: string;
	to?: string;
	onClick?: () => void;
};

export type MessageProps = {
	image?: string;
	children: ReactNode;
};

export type TabItem = {
	icon: FC<{ className: string }>;
	text: string;
};

export type SeoProps = {
	description?: string;
	ogDescription?: string;
	ogImage?: string;
	ogTitle?: string;
	title: string;
};

export type IconProps = {
	alt?: string;
	className?: string;
};
