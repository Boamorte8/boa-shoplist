import { Link } from 'react-router-dom';

import { BaseCard } from '../../atoms/BaseCard';
import { PageFlipIcon } from '../../atoms/icons/PageFlipIcon';
import { ListCardOptions } from '../ListCardOptions';

export const ListCard = ({ list, onDelete, onEdit }) => {
	const handleEdit = () => {
		onEdit(list);
	};

	const handleConfirmDelete = () => {
		onDelete(list);
	};

	return (
		<BaseCard
			classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'
			aria-label={list.title}
			component={Link}
			to={`/list/${list.id}`}
		>
			<article>
				<div className='flex items-center gap-2 text-primary-300 mb-1'>
					<PageFlipIcon className='h-5' />
					<h4 className='text-lg'>{list.title}</h4>
				</div>
				<p className='font-extralight text-sm text-white'>{list.description}</p>
			</article>
			<div className='flex justify-end items-center w-10'>
				<ListCardOptions onEdit={handleEdit} onDelete={handleConfirmDelete} />
			</div>
		</BaseCard>
	);
};
