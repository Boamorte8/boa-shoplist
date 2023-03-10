import { CrossIcon } from '../icons/CrossIcon';

type FloatButtonProps = {
	className?: string;
	onClick?: () => void;
};

export const FloatButton = (props: FloatButtonProps) => {
	return (
		<button
			{...props}
			className='fixed flex justify-center items-center bottom-4 right-4 lg:bottom-10 lg:right-6 h-10 w-10 bg-primary border-2 border-primary hover:border-primary-700 focus:border-white hover:bg-primary-700 focus:bg-primary-700 text-white rounded-full outline-none transition'
		>
			<CrossIcon className='h-6 w-6 rotate-45' />
		</button>
	);
};
