import { useTranslation } from 'react-i18next';

import BaseCard from '../../atoms/BaseCard';
import BaseInput from '../../atoms/forms/BaseInput';
import { useRegisterForm } from '../../../lib/hooks/useRegisterForm';
import {
	confirmPasswordChangedRegisterForm,
	emailChangedRegisterForm,
	passwordChangedRegisterForm
} from '../../../lib/actions/registerFormActions';

const RegisterPage = () => {
	const {
		email,
		password,
		confirmPassword,
		isFormInvalid,
		dispatchRegisterForm
	} = useRegisterForm();
	const { t } = useTranslation();
	const emailText = t('email');
	const passwordText = t('password');
	const confirmPasswordText = t('auth.confirmPassword');
	return (
		<div className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] w-full bg-background p-2 md:p-4 lg:p-6'>
			<BaseCard classes='max-w-2xl mx-auto'>
				<form className='w-full flex flex-col gap-2 items-center p-4'>
					<h1 className='dark:text-white font-bold text-xl mb-4'>
						{t('register')}
					</h1>

					<div className='w-fit grid gap-4'>
						<BaseInput
							id='email'
							type='email'
							name='email'
							className='max-w-xs'
							label={emailText}
							placeholder={emailText}
							error={email.error && t(email.error)}
							value={email.value}
							onChange={ev =>
								dispatchRegisterForm(emailChangedRegisterForm(ev.target.value))
							}
						/>

						<BaseInput
							id='password'
							type='password'
							name='password'
							className='max-w-xs'
							label={passwordText}
							placeholder={passwordText}
							error={password.error && t(password.error)}
							value={password.value}
							onChange={ev =>
								dispatchRegisterForm(
									passwordChangedRegisterForm(ev.target.value)
								)
							}
						/>

						<BaseInput
							id='confirmPassword'
							type='password'
							name='confirmPassword'
							className='max-w-xs'
							label={confirmPasswordText}
							placeholder={confirmPasswordText}
							error={confirmPassword.error && t(confirmPassword.error)}
							value={confirmPassword.value}
							onChange={ev =>
								dispatchRegisterForm(
									confirmPasswordChangedRegisterForm(ev.target.value)
								)
							}
						/>
					</div>

					{/* <BaseButton class="mb-4" type="submit">{{ t(mode) }}</BaseButton> */}
				</form>
			</BaseCard>
		</div>
	);
};

export default RegisterPage;
