import { IconProps } from '@lib/types/client';

export const AddPurchaseIcon = (props: IconProps) => (
	<svg
		{...props}
		color='currentColor'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		strokeWidth='2'
	>
		<path
			d='m20 14.5-.74-4.804A2 2 0 0 0 17.285 8H6.716a2 2 0 0 0-1.977 1.696l-1.385 9A2 2 0 0 0 5.331 21H12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='m14 19 3 3 5-5M14 5a2 2 0 1 0-4 0'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
