import { useTranslation } from 'react-i18next';

import BaseCard from '../../atoms/BaseCard';
import IconButton from '../../atoms/buttons/IconButton';
import DotsIcon from '../../atoms/icons/DotsIcon';
import PageFlipIcon from '../../atoms/icons/PageFlipIcon';

const ListCard = ({ list }) => {
	const { t } = useTranslation();

	const openMenu = list => {
		console.log('openMenu', list);
	};
	return (
		<BaseCard
			classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto'
			aria-label={list.title}
		>
			<div className=''>
				<div className='flex items-center gap-2 text-primary-300 mb-1'>
					<PageFlipIcon className='h-5' />
					<h4 className='text-lg'>{list.title}</h4>
				</div>
				<p className='font-extralight text-sm text-white'>{list.description}</p>
			</div>
			<div className='flex justify-end items-center w-10'>
				<IconButton className='' icon={DotsIcon} onClick={openMenu} />
			</div>
		</BaseCard>
	);
};

export default ListCard;
