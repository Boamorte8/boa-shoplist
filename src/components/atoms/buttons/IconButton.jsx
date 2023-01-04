const CLASSNAMES = {
	normal: {
		normal: 'style.normal',
		filled: 'style.normalFilled'
	},
	error: {
		normal: 'style.error',
		filled: 'style.errorFilled'
	}
};

const IconButton = ({
	kind = 'normal',
	filled,
	icon: Icon,
	className,
	...props
}) => {
	const classNames = CLASSNAMES[kind];
	const classNameKey = filled ? 'filled' : 'normal';
	const kindClassName = classNames[classNameKey];

	return (
		<button
			{...props}
			className={`h-8 w-8 outline-none rounded-full border-none flex justify-center items-center ${kindClassName} ${
				className || ''
			}`}
		>
			<Icon className='h-4 w-4 border-none outline-none text-primary-300' />
		</button>
	);
};

export default IconButton;
