import { IconProps } from '@lib/types/client';

export const RemoveCartIcon = (props: IconProps) => (
	<svg
		{...props}
		color='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M3 6h19l-3 10H6L3 6zm0 0-.75-2.5M9.992 11h4M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
