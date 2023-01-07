const BaseInput = ({ label, error, className, placeholder, ...props }) => (
	<label className={`block ${className || ''}`}>
		<span className='text-sm font-bold text-white pl-2'>{label}</span>
		<input
			type='text'
			{...props}
			className={`h-10 w-full py-2 px-4 mt-2 mx-0 mb-0 shadow-sm border rounded-lg outline-none focus:shadow-md placeholder:text-gray-300 ${
				error ? 'border-error-700' : 'border-transparent'
			}`}
			placeholder={placeholder}
		/>
		{error && (
			<p className='mt-2 mx-0 mb-0 pl-2 text-error-700 text-sm'>{error}</p>
		)}
	</label>
);

export default BaseInput;
