import { IconProps } from '@lib/types/client';

export const ShoppingCodeIcon = (props: IconProps) => (
	<svg
		{...props}
		color='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		strokeWidth='2'
	>
		<path
			d='M6 5v2m4-2v6m8-6v1M6 10v6m0 2.5v.5m4-.5v.5m4-.5v.5m4-.5v.5m-8-5v2m4-3v3m0-11v5m4-1v7'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
