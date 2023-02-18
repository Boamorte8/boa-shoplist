import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { ArrowUpDownIcon } from '../icons/ArrowUpDownIcon';
import { CheckIcon } from '../icons/CheckIcon';

export const BaseSelect = ({
	label,
	error,
	className,
	placeholder,
	items,
	keyProp,
	selected,
	setSelected,
	emptyMessage,
	...props
}) => {
	const { t } = useTranslation();
	return (
		<label className={`block text-white ${className || ''}`}>
			<span className='text-sm font-bold pl-2'>{label}</span>
			<Listbox value={selected} onChange={setSelected}>
				<div className='relative mt-2'>
					<Listbox.Button
						className={`relative text-left w-full cursor-default shadow-sm shadow-primary-700 border-2 rounded-lg bg-background py-2 pl-4 pr-10 outline-none focus:shadow-md enabled:focus:border-primary placeholder:text-gray-300  ${
							error ? 'border-error-700' : 'border-transparent'
						}`}
					>
						<span className='block truncate'>
							{!selected ? placeholder : keyProp ? selected[keyProp] : selected}
						</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ArrowUpDownIcon
								className='h-5 w-5 text-primary-300'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='absolute mt-1 min-h-[2.25rem] max-h-60 w-full overflow-auto rounded-md bg-background-700 py-1 text-base shadow-sm shadow-primary-700 ring-1 ring-primary-300 ring-opacity-5 outline-none'>
							{!items || !items.length ? (
								<span className='py-2 px-4'>
									{emptyMessage ||
										t('emptyEntities', { entities: t('items').toLowerCase() })}
								</span>
							) : (
								items.map((item, itemIdx) => (
									<Listbox.Option
										key={keyProp ? item[keyProp] : itemIdx}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
											}`
										}
										value={item}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? 'font-medium' : 'font-normal'
													}`}
												>
													{keyProp ? item[keyProp] : item}
												</span>
												{selected ? (
													<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
														<CheckIcon className='h-5 w-5' aria-hidden='true' />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))
							)}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
			{error && (
				<p className='mt-2 mx-0 mb-0 pl-2 text-error-700 text-sm'>{error}</p>
			)}
		</label>
	);
};
