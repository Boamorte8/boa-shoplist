import { BaseCard } from '../../atoms/BaseCard';
import { ListCardOptions } from '../ListCardOptions';
import { UnitIcon } from '../../atoms/icons/UnitIcon';

export const UnitCard = ({ unit, onDelete, onEdit }) => {
	const handleEdit = () => {
		onEdit(unit);
	};

	const handleConfirmDelete = () => {
		onDelete(unit);
	};

	return (
		<BaseCard classes='grid grid-cols-[1fr_2.5rem] gap-2 items-center w-full max-w-2xl mx-auto outline-none hover:bg-background-700 focus:bg-background-700 hover:cursor-pointer transition-transform'>
			<article>
				<div className='flex items-center gap-2 text-primary-300 mb-0'>
					<UnitIcon className='h-5' />
					<h4 className='text-lg font-semibold'>{unit.name}</h4>
				</div>
				<p className='mb-2 text-gray-300 text-sm font-extralight'>
					({unit.display})
				</p>
				<p className='text-white'>{unit.description}</p>
			</article>
			<div className='flex justify-end items-center w-10'>
				<ListCardOptions onEdit={handleEdit} onDelete={handleConfirmDelete} />
			</div>
		</BaseCard>
	);
};
