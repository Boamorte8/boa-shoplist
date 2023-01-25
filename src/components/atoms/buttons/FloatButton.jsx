import CrossIcon from '../icons/CrossIcon';

const FloatButton = props => {
	return (
		<button
			{...props}
			className='fixed flex justify-center items-center bottom-4 right-4 h-10 w-10 bg-primary border-2 border-primary hover:border-primary-700 focus:border-white hover:bg-primary-700 focus:bg-primary-700 text-white rounded-full outline-none'
		>
			<CrossIcon className='h-6 w-6 rotate-45' />
		</button>
	);
};

export default FloatButton;
