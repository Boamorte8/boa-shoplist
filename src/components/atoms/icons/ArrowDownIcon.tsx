import { IconProps } from '@lib/types/client';

export const ArrowDownIcon = (props: IconProps) => (
	<svg
		{...props}
		stroke='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M19 9l-7 7-7-7'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
