import { FC, forwardRef } from 'react';

type IconButtonProps = {
	icon: FC<{ className: string }>;
	kind?: 'normal' | 'error';
	filled?: boolean;
	className?: string;
	onClick?: () => void;
};

const CLASSNAMES = {
	normal: {
		normal:
			'text-primary-300 border-transparent hover:border-primary-700 focus:border-white hover:bg-primary-700',
		filled:
			'text-white bg-primary border-primary hover:border-primary-700 focus:border-white hover:bg-primary-700 focus:bg-primary-700'
	},
	error: {
		normal: '',
		filled: ''
	}
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ kind = 'normal', filled, icon: Icon, className, ...props }, ref) => {
		const classNames = CLASSNAMES[kind];
		const classNameKey = filled ? 'filled' : 'normal';
		const kindClassName = classNames[classNameKey];

		return (
			<button
				ref={ref}
				{...props}
				className={`h-8 w-8 outline-none rounded-full flex justify-center items-center border-2 transition ${kindClassName} ${
					className || ''
				}`}
			>
				<Icon className='h-5 w-5 border-none outline-none' />
			</button>
		);
	}
);
IconButton.displayName = 'IconButton';
