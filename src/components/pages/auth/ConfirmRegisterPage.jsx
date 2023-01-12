import { useTranslation } from 'react-i18next';

import BaseCard from '../../atoms/BaseCard';
import Button from '../../atoms/buttons/Button';

const ConfirmRegisterPage = () => {
	const { t } = useTranslation();
	return (
		<div className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] w-full bg-background p-2 md:p-6 lg:p-10'>
			<BaseCard classes='max-w-2xl mx-auto'>
				<div className='w-full flex flex-col gap-2 items-center p-4'>
					<h1 className='dark:text-white font-bold text-xl mb-4'>Confirm</h1>

					<Button className='mt-6' type='submit'>
						{t('login')}
					</Button>
				</div>
			</BaseCard>
		</div>
	);
};

export default ConfirmRegisterPage;
