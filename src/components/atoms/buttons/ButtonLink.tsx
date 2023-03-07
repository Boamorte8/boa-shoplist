import { Link } from 'react-router-dom';
import { MouseEvent, ReactNode } from 'react';

type ButtonLinkProps = {
	className: string;
	to?: string;
	onClick?: (event: MouseEvent) => void;
	children: ReactNode;
};

export const ButtonLink = ({
	className,
	to = '',
	...props
}: ButtonLinkProps) => {
	return (
		<Link
			className={`font-extralight text-primary-300 hover:underline hover:text-primary focus:underline focus:text-primary outline-none ${className}`}
			to={to}
			{...props}
		/>
	);
};
