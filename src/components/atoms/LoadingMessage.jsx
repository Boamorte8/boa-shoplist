export const LoadingMessage = ({ children, image = '/loading.svg' }) => {
	return (
		<div className='flex flex-col items-center gap-4 px-2 py-6'>
			<div>{children}</div>
			<img className='max-w-xs px-6' alt='Loading' src={image} />
		</div>
	);
};
