import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { ArrowDownIcon } from '@atoms/icons/ArrowDownIcon';

export const LangSelector = () => {
	const { t, i18n } = useTranslation();
	const langs: { [key: string]: string } = {
		en: 'english',
		es: 'spanish'
	};
	const selectedLang = langs[i18n.resolvedLanguage];
	const unselectedLangs = Object.entries(langs).filter(
		([, value]) => value !== selectedLang
	);
	const items = unselectedLangs.map(([code, lang]) => (
		<Menu.Item key={lang}>
			{({ active }) => (
				<button
					className={`${
						active ? 'bg-primary-700 text-background-700' : 'text-primary-300'
					} group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm transition`}
					onClick={() => i18n.changeLanguage(code)}
				>
					<img src={`/${lang}.webp`} alt={`${lang} flag`} className='h-6 w-6' />
					<span className='text-white font-extralight text-lg'>
						{t(`langs.${lang}`)}
					</span>
				</button>
			)}
		</Menu.Item>
	));
	return (
		<Menu as='div' className='relative inline-block text-left'>
			{({ open }) => (
				<>
					<Menu.Button className='inline-flex w-full gap-2 items-center rounded-md bg-opacity-20 px-2 py-1 text-sm font-medium text-white transition-all hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
						<img
							src={`/${selectedLang}.webp`}
							alt={`${selectedLang} flag`}
							className='h-6 w-6'
						/>
						<span className='text-white font-extralight hidden md:block text-lg '>
							{t(`langs.${selectedLang}`)}
						</span>
						<ArrowDownIcon
							className={`-mr-1 h-5 w-5 text-primary-300 hover:text-primary transition-transform duration-500 ${
								open ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
						/>
					</Menu.Button>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'
					>
						<Menu.Items
							static
							className='absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-background-700 shadow-sm shadow-primary-700 ring-1 ring-primary-300 ring-opacity-5 focus:outline-none'
						>
							<div className='px-1 py-1 '>{items}</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};
