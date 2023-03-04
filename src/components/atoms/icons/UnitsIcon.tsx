import { IconProps } from '@lib/types/client';

export const UnitsIcon = (props: IconProps) => (
	<svg
		{...props}
		color='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		strokeWidth='2'
	>
		<path
			d='M11 6h10M11 12h10M11 18h10M5 19V5m0 14l-2-2.5M5 19l2-2.5M5 5L3 7m2-2l2 2'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			stroke='currentColor'
		/>
	</svg>
);
