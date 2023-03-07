type BaseInputProps = {
	label: string;
	error: string;
	className?: string;
	placeholder?: string | undefined;
	id?: string;
};

export const BaseInput = ({
	label,
	error,
	className,
	placeholder,
	...props
}: BaseInputProps) => (
	<label className={`block text-white ${className || ''}`}>
		<span className='text-sm font-bold pl-2'>{label}</span>
		<input
			type='text'
			{...props}
			className={`h-10 w-full py-2 px-4 mt-2 mx-0 mb-0 shadow-sm shadow-primary-700 border-2 rounded-lg outline-none bg-background focus:shadow-md enabled:focus:border-primary placeholder:text-gray-300 ${
				error ? 'border-error-700' : 'border-transparent'
			}`}
			placeholder={placeholder}
		/>
		{error && (
			<p className='mt-2 mx-0 mb-0 pl-2 text-error-700 text-sm'>{error}</p>
		)}
	</label>
);
