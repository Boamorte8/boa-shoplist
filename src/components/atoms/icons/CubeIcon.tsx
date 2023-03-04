import { IconProps } from '@lib/types/client';

export const CubeIcon = (props: IconProps) => (
	<svg
		{...props}
		stroke='currentColor'
		color='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		strokeWidth='2'
	>
		<path
			d='M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
		<path
			d='M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
	</svg>
);
