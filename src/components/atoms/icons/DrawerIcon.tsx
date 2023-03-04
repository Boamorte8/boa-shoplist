import { IconProps } from '@lib/types/client';

export const DrawerIcon = (props: IconProps) => (
	<svg
		{...props}
		stroke='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M21 14H3M3 8h18M11 17h2M11 11h2M11 5h2M21 2.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V2.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6zM17.5 20v2M6.5 20v2'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
