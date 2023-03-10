import { MouseEvent, ReactNode } from 'react';

import { Spinner } from '../Spinner';

type KindButton = 'primary' | 'secondary';

type ButtonProps = {
	kind?: KindButton;
	className?: string;
	loading?: boolean;
	children?: ReactNode;
	onClick?: (event: MouseEvent) => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset' | undefined;
};

const KIND_CLASSNAME: { [key: string]: string } = {
	primary:
		'bg-primary text-white enabled:hover:bg-primary-700 enabled:hover:border-primary-700 enabled:focus:bg-primary-700 enabled:focus:border-primary-300',
	secondary:
		'bg-background text-primary enabled:hover:text-primary-700 enabled:hover:bg-background-700 enabled:hover:border-primary-700 enabled:focus:bg-background-700 enabled:focus:border-primary-700 enabled:focus:text-primary-700'
};

export const Button = ({
	kind = 'primary',
	className,
	loading,
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={`h-10 rounded-lg shadow-sm shadow-primary-700 outline-none border-2 border-primary flex items-center justify-center px-4 py-0 cursor-pointer disabled:bg-primary-300 disabled:border-primary-300 disabled:text-gray-400 disabled:cursor-default ${
				KIND_CLASSNAME[kind]
			} ${className || ''}`}
		>
			{loading ? <Spinner className='h-5 w-5' /> : children}
		</button>
	);
};
