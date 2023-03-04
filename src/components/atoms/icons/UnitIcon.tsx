import { IconProps } from '@lib/types/client';

export const UnitIcon = (props: IconProps) => (
	<svg
		{...props}
		stroke='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M3.75 9h16.5m-16.5 6.75h16.5'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
