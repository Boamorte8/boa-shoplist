import { MessageProps } from '@lib/types/client';

export const EmptyMessage = ({
	children,
	image = '/empty-folder.svg'
}: MessageProps) => {
	return (
		<div className='flex flex-col items-center gap-4 px-2 py-6'>
			<div>{children}</div>
			<img className='max-w-xs px-6' alt='Empty' src={image} />
		</div>
	);
};
